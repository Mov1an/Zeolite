module.exports = {
    name: "poll",
    group: "BASIC_GROUP",
    description: "POLL_COMMAND_DESCRIPTION",
    usage: "POLL_COMMAND_USAGE",
    argsRequired: true,
    async run(client, msg, args, prefix, language) {
        if (!args.length)
            return msg.reply(msg.t("POLL_NO_ARGS_PROMPT", prefix));

        const [ question, ...answers ] = args;
        const reactions = [ "🇦", "🇧", "🇨", "🇩", "🇪", "🇫", "🇬", "🇭", "🇮", "🇯" ];

        if (!answers.length)
            return msg.reply(msg.t("POLL_NO_ANSWERS", prefix));
        if (answers.length > 10)
            return msg.reply(msg.t("POLL_NOT_MORE_THAN_10_ANSWERS"));

        const description = answers.map((answer, index) => `${reactions[index]} - ${answer}`).join("\n");

        const embed = {
            author: {
                name: msg.t("POLL_STARTED_BY", msg.author),
                icon_url: msg.author.avatarURL,
            },
            title: question,
            description,
            color: await msg.author.embedColor(),
        };
        const message = await msg.channel.createMessage({ embed });
        for (let i = 0; i < answers.length; i++) message.addReaction(reactions[i]);
    }
};