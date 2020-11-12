const Eris = require("eris-additions")(require("eris"));
const fs = require("fs");
const Sequelize = require("sequelize");
const initDB = require("./initDB");

const PermissionError = require("./errors/permissionError");

const Group = require("./group");
const Logger = require("./logger");
const i18n = require("./i18n");

function validatePermission(member, permissions) {
  if (permissions instanceof Array) {
    for (const permission of permissions) {
      const hasPermission = member.permission.has(permission);
      if (!hasPermission)
        throw new PermissionError("missing permission.", permission);
    }
  } else {
    const hasPermission = member.permission.has(permissions);
    if (!hasPermission)
      throw new PermissionError("missing permission.", permissions);
  }
}

class CmdClient extends Eris.Client {
  constructor(token, options = {}) {
    super(token, options);
    this.prefix1 = options.prefix1;
    this.prefix2 = options.prefix2;
    this.owners = options.owners || [];

    this.commands = new Eris.Collection();
    this.groups = new Eris.Collection();

    this.i18n = new i18n(this);

    this.debugMode = options.debugMode || false;

    this.webhookID = options.webhookID;
    this.webhookToken = options.webhookToken;

    this.logger = new Logger(options.debugMode ? Logger.TRACE : Logger.INFO, "Zeolite");
    if (options.debugMode) {
      this._erisLogger = new Logger(Logger.TRACE, "eris");
      this.on("debug", msg => this._erisLogger.debug(msg));
    }

    this.supportChannelID = options.supportChannelID;

    this.extensions = {};1

    global.sequelize = new Sequelize({
      dialect: "sqlite",
      storage: "./bot.db",
      logging: false,
    });
    initDB(sequelize, Sequelize.DataTypes);

    global._ = this.i18n.getTranslation.bind(this.i18n);
    global.t = _;

    this.once("ready", () => {
      this.logger.info(`${this.user.username} online!`);
      this.editStatus({ name: `Type @${this.user.username}`, type: 5 });
      sequelize.sync()
        .then(() => this.logger.info("connected to the database."));

      for (const guild of this.guilds.values()) {
        guild.fetchAllMembers();
      }
    });

    this.on("messageCreate", async msg => {
      if (!msg.guild || msg.author.bot) return;
      
      const prefix = await prefixes.findOne({ where: { server: msg.guild.id } })
          .then(p => p && p.prefix) || this.prefix1;

      let language = (await userLanguages.findOrCreate({ where: { user: msg.author.id } }))[0];
      if (!language.overriden) {
        if (msg.channel.guild)
          language = (await languages.findOrCreate({ where: { server: msg.channel.guild.id } }))[0];
        else language = { language: "en" };
      }

      if (msg.content.replace("<@!", "<@") == (this.user.mention)) {
        return this.commands.get("prefix").run(client, msg, [], prefix, language.language);
      }

      if (!msg.content.startsWith(prefix)) return;

      const args = this._parseArgs(msg.content);
      args.raw = msg.content.split(/ +/g);
      args.raw.shift();

      const cmdName = args.shift().toLowerCase().slice(prefix.length);
      const command = this.commands.find(c => c.name == cmdName || (c.aliases && c.aliases.includes(cmdName)));
      if (!command) return;

      const { banned: areCommandsBanned, reason } = (await commandBans.findOrCreate({ where: { user: msg.author.id } }))[0];
      if (areCommandsBanned) {
        const embed = {
          title: _(language.language, "COMMANDS_BANNED"),
          description: _(language.language, "COMMANDS_BANNED_REASON", reason),
          color: 15158332,
        };
        return msg.channel.createEmbed(embed);
      }

      if (command.ownerOnly && this.owners.indexOf(msg.author.id) === -1) {
        return;
      }

      try {
        if (command.requiredPermissions) validatePermission(msg.member, command.requiredPermissions);
        await command.run(this, msg, args, prefix, language.language);
        
        this.emit("commandSuccess", command, msg);
      } catch (err) {
        this.emit("commandError", command, msg, err, language.language);
      }
    });
  }

  _parseArgs(str) {
    let args = [];

    while (str.length) {
      let arg;
      if (str.startsWith('"') && str.indexOf('"', 1) > 0) {
        arg = str.slice(1, str.indexOf('"', 1));
        str = str.slice(str.indexOf('"', 1) + 1);
      } else {
        arg = str.split(/\s+/g)[0].trim();
        str = str.slice(arg.length);
      }
      args.push(arg.trim())
      str = str.trim()
    }

    return args;
  }

  loadCommand(path) {
    const command = require(path);
    if (!this.groups.has(command.group)) {
      if (command.group)
        this.groups.set(command.group, new Group(this, command.group));
      else this.groups.set("Uncategorized", new Group(this, "Uncategorized"));
    }
    
    command.path = path;

    this.commands.set(command.name, command);
    this.logger.debug(`successfully loaded ${command.name} command.`);
  }

  loadGroups(groups) {
    this.logger.info("loading the commands...")
    for (const dir of groups) {
      const commands = fs.readdirSync(`./commands/${dir}`).filter(f => f.endsWith(".js"));
      for (let command of commands)
        this.loadCommand(`../commands/${dir}/${command}`);
    }
    this.logger.info(`successfully loaded all commands.`);
  }

  reloadCommand(cmdName) {
    const command = this.commands.get(cmdName);
    if (!command)
      throw new Error("command does not exist.");

    const pathToCommand = require.resolve(command.path);
    delete require.cache[pathToCommand];

    this.commands.delete(cmdName);
    this.loadCommand(pathToCommand);
  }

  async connect() {
    this.logger.info("trying to login now...");
    return super.connect();
  }

  async fetchUser(id) {
    if (!this.users.has(id)) {
      try {
        const userData = await this.requestHandler.request("GET", `/users/${id}`, true);
        this.users.add(userData);
        return new Eris.User(userData, this);
      } catch {}
    } else {
      return this.users.get(id);
    }
  }

  loadExtension(path) {
    const ext = require(path);
    if (!ext.load || !ext.load instanceof Function) {
      throw new Error("extension should export a load() function");
    }
    if (!ext.unload || !ext.unload instanceof Function) {
      throw new Error("extension should export a unload() function");
    }

    ext.load(this);
    this.extensions[require.resolve(path)] = ext;
  }

  unloadExtension(path) {
    const fullPath = require.resolve(path);

    if (!this.extensions[fullPath]) {
      throw new Error("extension does not exist");
    }

    const ext = this.extensions[fullPath];
    
    ext.unload();
    delete this.extensions[fullPath];
    delete require.cache[fullPath];
  }

  reloadExtension(path) {
    this.unloadExtension(path);
    this.loadExtension(path);
  }
}

CmdClient.PermissionError = PermissionError;
CmdClient.Group = Group;
CmdClient.Logger = Logger;
CmdClient.i18n = i18n;

module.exports = CmdClient;
