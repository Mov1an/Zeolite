const Eris = require("eris");
const Sequelize = require("sequelize");

function parseUptime(time) {
  const obj = new Date(time);

  let days = obj.getUTCDate() - 1;
  let hours = obj.getUTCHours();
  let minutes = obj.getUTCMinutes();
  let seconds = obj.getUTCSeconds();

  if (hours < 10) hours = "0" + hours;
  if (minutes < 10) minutes = "0" + minutes;
  if (seconds < 10) seconds = "0" + seconds;

  return `${days}:${hours}:${minutes}:${seconds}`;
}

function getPlatform() {
  switch (process.platform) {
    case "win32":
      return "<:windows:682913067109318678> Windows";
      break;
    case "linux":
      return "<:linux:682913067025432581> Linux";
      break;
    case "android":
      return "<:android:691592978229100596> Android";
      break;
    default:
      return process.platform;
      break;
  }
}

module.exports = {
  name: "stats",
  group: "BASIC_GROUP",
  description: "STATUS_COMMAND_DESCRIPTION",
  async run(client, msg, args, prefix, language) {
    const ramUsage = process.memoryUsage().heapUsed / 1048576;

    const embed = {
      title: client.i18n.getTranslation(language, "STATUS_EMBED_TITLE"),
      color: Math.round(Math.random() * 16777216) + 1,
      footer: {
        text: `${client.user.username} v${client.version} © 2019-2020 ZariBros`,
        icon_url: client.user.avatarURL,
      },
      fields: [
        {
          name: client.i18n.getTranslation(language, "STATUS_UPTIME"),
          value: parseUptime(process.uptime() * 1000),
        },
        {
          name: _(language, "STATUS_PLATFORM"),
          value: getPlatform(),
        },
        {
          name: t(language, "STATUS_RAM_USAGE"),
          value: ramUsage.toFixed(1) + " " + t(language, "STATUS_MEGABYTES"),
        },
        {
          name: client.i18n.getTranslation(language, "STATUS_SERVERS"),
          value: client.guilds.size,
        },
        {
          name: client.i18n.getTranslation(language, "STATUS_USERS"),
          value: client.users.size,
        },
        {
          name: _(language, "STATUS_LIBRARIES"),
          value: `Eris: ${Eris.VERSION}\nSequelize: ${Sequelize.version}`
        },
      ],
    };
    await msg.channel.createMessage({ embed });
  }
}