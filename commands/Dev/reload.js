module.exports = {
  name: "reload",
  group: "DEV_GROUP",
  description: "RELOAD_DESCRIPTION",
  usage: "RELOAD_USAGE",
  ownerOnly: true,
  argsRequired: true,
  async run(client, msg, args, prefix, lang) {
    if (!args.length) {
      return msg.reply(t(lang, "RELOAD_NO_ARGS", prefix));
    }

    const cmdName = args[0];
    let errCmdName;

    try {
      if (cmdName == "all") {
        const cmds = client.commands.map(c => c.name);
        for (const cmd of cmds) {
          try {
            client.reloadCommand(cmd);
          } catch (err) {
            errCmdName = cmd.name;
            throw err;
          }
        }

        const embed = {
          title: t(lang, "RELOAD_ALL_SUCCESS"),
          color: 1879160,
        };

        await msg.reply({ embed });
      } else if (cmdName == "langs") {
        client.i18n.reloadLanguages();

        const embed = {
          title: t(lang, "RELOAD_LANGS_SUCCESS"),
          color: 1879160,
        };

        await msg.reply({ embed });
      } else {
        if (!client.commands.has(cmdName)) {
          return msg.reply(t(lang, "RELOAD_COMMAND_DOESNT_EXIST"));
        }

        client.reloadCommand(cmdName);

        const embed = {
          title: t(lang, "RELOAD_SUCCESS", cmdName),
          color: 1879160,
        };

        await msg.reply({ embed });
      }
    } catch (err) {
      let title = t(lang, "RELOAD_ERROR", errCmdName);

      if (cmdName == "all") title = t(lang, "RELOAD_ERROR_ALL");
      if (cmdName == "langs") title = t(lang, "RELOAD_ERROR_LANGS");

      const embed = {
        title,
        description: `\`\`\`${err}\`\`\``,
        color: 13370885,
      };

      await msg.reply({ embed });
    }
  }
};
