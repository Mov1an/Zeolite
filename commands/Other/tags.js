async function getTag(server, name) {
  return tags.findOne({ where: { server, name } });
}

async function addTag(server, author, name, text) {
  return tags.create({
    server,
    author,
    name,
    text,
  });
}

module.exports = {
  name: "tags",
  group: "OTHER_GROUP",
  description: "TAGS_DESCRIPTION",
  usage: "TAGS_USAGE",
  aliases: [ "t" ],
  async run(client, msg, args, prefix, lang) {
    const subcommand = args.shift();

    switch (subcommand) {
      case "add": {
        const name = args.shift();
        const content = args.join(" ");

        if (!name) {
          return msg.reply(msg.t("TAGS_NO_NAME"));
        }
        if (!content) {
          return msg.reply(msg.t("TAGS_NO_CONTENT"));
        }

        const tag = await getTag(msg.guild.id, name);
        if (tag) {
          return msg.reply(msg.t("TAG_ALREADY_EXIST"));
        }

        if (name.length > 128) {
          return msg.reply(msg.t("TAG_NAME_TOO_BIG"));
        }

        await addTag(msg.guild.id, msg.author.id, name, content);

        return msg.reply(msg.t("TAGS_ADD_SUCCESS", name));
        break;
      }
      case "edit": {
        const name = args.shift();
        const content = args.join(" ");

        if (!name) {
          return msg.reply(msg.t("TAGS_NO_NAME"));
        }
        if (!content) {
          return msg.reply(msg.t("TAGS_NO_CONTENT"));
        }

        const tag = await getTag(msg.guild.id, name);
        if (!tag || tag.author != msg.author.id) {
          return msg.reply(msg.t("TAGS_NOT_OWNER"));
        }

        await tag.update({ text: content });
        return msg.reply(msg.t("TAGS_EDIT_SUCCESS", name));
        break;
      }
      case "rename": {
        const name = args.shift();
        const newName = args.join(" ");

        if (!name) {
          return msg.reply(msg.t("TAGS_NO_NAME"));
        }
        if (!newName) {
          return msg.reply(msg.t("TAGS_NO_NEW_NAME"));
        }

        if (newName.length > 128) {
          return msg.reply(msg.t("TAG_NEW_NAME_TOO_BIG"));
        }

        const tag = await getTag(msg.guild.id, name);
        if (!tag || tag.author != msg.author.id) {
          return msg.reply(msg.t("TAGS_NOT_OWNER"));
        }
        
        if (newName == tag.name) {
          return msg.reply(msg.t("TAGS_SAME_NAME"));
        }

        await tag.update({ name: newName });
        return msg.reply(msg.t("TAGS_RENAME_SUCCESS", name, newName));
        break;
      }
      case "delete": {
        const name = args[0];

        if (!name) {
          return msg.reply(msg.t("TAGS_NO_NAME"));
        }

        const tag = await getTag(msg.guild.id, name);
        if (!tag || tag.author != msg.author.id) {
          return msg.reply(msg.t("TAGS_NOT_OWNER"));
        }

        await tag.destroy();
        return msg.reply(msg.t("TAGS_REMOVE_SUCCESS", name));
        break;
      }
      case "transfer": {
        const name = args[0];
        const user = msg.mentions[0] || client.users.find(u => u.tag == args[1] || u.id == args[1]);

        if (!user) {
          return msg.reply(msg.t("INVALID_USER_PROVIDED"));
        }

        const tag = await getTag(msg.guild.id, name);
        if (!tag || tag.author != msg.author.id) {
          return msg.reply(msg.t("TAGS_NOT_OWNER"));
        }

        await tag.update({ author: user.id });
        return msg.reply(msg.t("TAGS_TRANSFER_SUCCESS", name, user.tag));
        break;
      }
      case "owner": {
        const name = args[0];

        if (!name) {
          return msg.reply(msg.t("TAGS_NO_NAME"));
        }

        const tag = await getTag(msg.guild.id, name);
        if (!tag) {
          return msg.reply(msg.t("TAG_NOT_FOUND"));
        }

        const owner = client.users.get(tag.author);
        return msg.reply(msg.t("TAGS_OWNER", name, owner ? owner.tag : tag.author));
      }
      case "list": {
        const pageNum = parseInt(args[0]) || 1;

        const allTags = await tags.findAll({ where: { server: msg.guild.id } })
          .then(tags => tags.map((t, i) => `${i + 1}: \`${t.name}\``));

        const total = allTags.length;
        
        const pages = [];
        while (allTags.length) {
          const arr = [];
          for (const tag of allTags.splice(0, 15)) {
            arr.push(tag);
          }
          pages.push(arr);
        }

        if (!pages[pageNum - 1]) {
          return msg.reply(msg.t("TAGS_INVALID_PAGE_NUMBER"));
        }

        const embed = {
          title: msg.t("TAGS_LIST"),
          description: pages[pageNum - 1].join("\n"),
          color: await msg.author.embedColor(),
          footer: { text: msg.t("TAGS_LIST_FOOTER", pageNum, pages.length, total) },
        };
        return msg.reply({ embed });
        break;
      }
      default: {
        if (!subcommand) {
          const embed = {
            title: msg.t("TAGS_HELP"),
            description: msg.t("TAGS_DESC"),
            fields: [
              {
                name: msg.t("TAGS_HELP_LIST"),
                value: msg.t("TAGS_HELP_DESC", prefix),
              },
            ],
            color: await msg.author.embedColor(),
            footer: {
              text: `${client.user.username} ?? ZariBros`,
              icon_url: client.user.avatarURL,
            },
          };

          await msg.reply({ embed });
        } else {
          const tag = await getTag(msg.guild.id, subcommand);

          if (!tag) {
            return msg.reply(msg.t("TAG_NOT_FOUND"));
          }

          await msg.reply(tag.text);
        }

        break;
      }
    }
  }
}