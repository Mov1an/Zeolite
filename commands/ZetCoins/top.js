module.exports = {
  name: "top",
  group: "ZETCOINS_GROUP",
  description: "TOP_COMMAND_DESCRIPTION",
  async run(client, msg, args, prefix, lang) {
    const isGlobal = args[0] == "-g" || args[0] == "--global";

    const authorBalance = await zetCoins.findOrCreate({ where: { user: msg.author.id } })
      .then(b => b[0]);
    let balances = await zetCoins.findAll();

    if (!isGlobal) balances = balances.filter(b => msg.guild.members.has(b.user));
    balances = balances.sort((a, b) => b.balance - a.balance)
        .filter(b => client.users.has(b.user) && !client.users.get(b.user).bot);
    const authorPosition = balances.findIndex(b => b.user == msg.author.id) + 1;
    balances = balances.splice(0, 10);

    const embed = {
      title: msg.t(isGlobal ? "TOP_TITLE_GLOBAL" : "TOP_TITLE", msg.guild.name),
      color: await msg.author.embedColor(),
      footer: {
        text: msg.t("TOP_FOOTER", authorPosition, authorBalance.balance),
        icon_url: msg.author.avatarURL,
      },
      fields: [],
    };

    let number = 1;
    for (const balance of balances) {
      const user = client.users.get(balance.user) || await client.fetchUser(balance.user);
      embed.fields.push({
        name: `${number++}: ${user.tag || balance.user}`,
        value: msg.t("TOP_BALANCE", balance.balance),
      });
    }

    await msg.reply({ embed });
  }
};
