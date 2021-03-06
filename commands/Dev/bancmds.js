 module.exports = {
  name: "bancmds",
  group: "DEV_GROUP",
  description: "BANCOMMANDS_COMMAND_DESCRIPTION",
  usage: "BANCOMMANDS_COMMAND_USAGE",
  ownerOnly: true,
  argsRequired: true,
  async run(client, msg, args, prefix, lang) {
    if (!args.length)
      return msg.reply(msg.t("BANCOMMANDS_NO_ARGS_PROMPT", prefix));

    const [ userID, ...reason ] = args;

    const member = msg.mentions[0] || client.users.get(userID);
    if (!member) return msg.reply(msg.t("INVALID_USER_PROVIDED"));

    if (member.id === msg.author.id)
      return msg.reply(msg.t("BANCOMMANDS_CANT_BAN_SELF"));
    if (client.owners.includes(member.id))
      return msg.reply(msg.t("BANCOMMANDS_CANT_BAN_OTHER_BOT_OWNER"));

    const banned = await isAlreadyBanned(member);
    if (banned)
      return msg.reply(msg.t("BANCOMMANDS_USER_ALREADY_BANNED"));

    await commandBans.update({
      banned: true,
      reason: reason.join(" "),
    }, { where: { user: member.id } });

    const embed = {
      author: {
        name: msg.t("BANCOMMANDS_SUCCESSFUL_BAN", member),
        icon_url: member.avatarURL,
      },
      color: 3066993,
      description: msg.t("BANCOMMANDS_BAN_REASON", reason.join(" ")),
    }

    await msg.channel.createEmbed(embed);
  }
};

async function isAlreadyBanned(user) {
  return (await commandBans.findOrCreate({ where: { user: user.id } }))[0].banned;
}
