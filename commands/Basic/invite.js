const moment = require("moment");
function isCorrectInvite(invite) {
  const inviteArray = invite.split("/");
  inviteArray.pop();

  const link = inviteArray.join('/');

  return inviteArray.length ? link == "https://discord.gg" || link == "https://discord.com/invite"
    || link == "https://discordapp.com/invite" : true // убрать в будущем
}

function parseInvite(invite) {
  return invite.split("/").pop();
}

function getGuildIconURL(guild) {
  if (!guild.icon) return null;
  return `https://cdn.discordapp.com/icons/${guild.id}/${guild.icon}.png`;
}

module.exports = {
  name: "invite",
  group: "BASIC_GROUP",
  description: "INVITE_DESCRIPTION",
  usage: "INVITE_USAGE",
  aliases: [ "i", "inviteinfo", "inv" ],
  argsRequired: true,
  async run(client, msg, args, prefix, lang) {
    if (!args.length) {
      return msg.reply(msg.t("INVITE_NO_ARGS", prefix));
    }

    let invite = args[0];
    
    if (!isCorrectInvite(invite)) {
      return msg.reply(msg.t("INVITE_INVALID"));
    }

    let inviteInfo;
    try {
      inviteInfo = await client.getInvite(parseInvite(invite), true);
    } catch {
      return msg.reply(msg.t("INVITE_INVALID"));
    }

    if (!msg.member.permissions.has("manageMessages")) msg.delete().catch(() => {});

    moment.locale(msg.author.lang);
    
    const createdDaysAgo = Math.floor((Date.now() - inviteInfo.guild.createdAt) / (86400 * 1000));

    const embed = {
      author: {
        name: inviteInfo.guild.name,
      },
      thumbnail: { url: inviteInfo.guild.iconURL },
      color: await msg.author.embedColor(),
      footer: { text: msg.t("INVITE_SERVER_CREATED_AT") + " " + msg.t("DAYS_AGO", createdDaysAgo) },
      timestamp: new Date(inviteInfo.guild.createdAt).toISOString(),
      fields: [
        {
          name: msg.t("INVITE_MEMBERS"),
          value: msg.t("INVITE_MEMBERS_COUNT", inviteInfo.memberCount, inviteInfo.presenceCount),
          inline: true,
        },
        {
          name: msg.t("INVITE_VERIFICATION_LEVEL"),
          value: msg.t("INVITE_VERIFICATION_LEVELS")[inviteInfo.guild.verificationLevel],
          inline: true,
        },
        {
          name: "ID",
          value: inviteInfo.guild.id,
          inline: true,
        },
        {
          name: msg.t("INVITE_CHANNEL"),
          value: `#${inviteInfo.channel.name} (ID: ${inviteInfo.channel.id})`,
        },
      ],
    };

    if (inviteInfo.guild.description) {
      embed.description = inviteInfo.guild.description;
    }

    if (inviteInfo.inviter) {
      embed.fields.push({
        name: msg.t("INVITE_INVITER"),
        value: `${inviteInfo.inviter.tag} (ID: ${inviteInfo.inviter.id})`,
      });
    }

    await msg.channel.createMessage({ embed });
  }
}
