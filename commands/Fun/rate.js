const answers = {
    ru: [
      '**?/10**\nчё',
      '**?/10**\nПставь псису ыаававы эээм... пук',
      '**?/10**\nЯ просто чайник ебанный как это понять',
      '**-100/10**\nА что звучит хайпово',
      '**-10/10**\nБраво, по-мужски, просто охуенно, уёбок!',
      '**-10/10**\nИменно ты этого и добивался?',
      '**-10/10**\nБрах)',
      '**-10/10**\nВот эти хейтеры захватили мой первый Discord-сервер',
      '**0/10**\nА... Ну ясненько! Удачи парнише и весёлых приключений!',
      '**0/10**\nЧё за хуйня, а ну передылвай',
      '**0/10**\nУгу. Ага. Да-да. Круто. Хайпово.',
      '**0/10**\nХуйня давай ещё',
      '**2/10**\nГовно переделывай',
      '**5/10**\nДед доест',
      '**8/10**\nОтдай',
      '**8/10**\nНормально',
      '**10/10**\nСмотрите и учитесь девачьки)',
      '**10/10**\nТолстенькая, толстенькая.',
      '**10/10**\nЯ снимаю с неё нижнее бельё, ох этот волнительный процесс...',
      '**10/10**\nМолодец :kissing_heart:',
      '**10/10**\nВот это РЕАЛЬНО нихуёвая смешнявка, смотрите и учитесь!',
      '**100/10**\n:flushed: Нихуёво',
      '**100/10**\nХочу ржать как Ванька Митенков...',
    ],
    en: [
      '**?/10**\nwhat',
      '**?/10**\nI don\'t understand',
      '**-10/10**\nExtremely awful',
      '**-10/10**\nBruh',
      '**-10/10**\nnice try :)',
      '**0/10**\nChange my mind',
      '**0/10**\nAwful',
      '**2/10**\nRemade it',
      '**5/10**\nNot bad',
      '**8/10**\nNice',
      '**10/10**\nAwesome'
    ],
  };

  function randomAnswer(lang) {
    let langAnswers = answers[lang];
    return langAnswers[Math.floor(Math.random() * langAnswers.length)];
  }
  
  module.exports = {
    name: "rate",
    group: "FUN_GROUP",
    description: "RATE_DESCRIPTION",
    usage: "RATE_USAGE",
    async run(client, msg, args, prefix, lang) {
        if (!args.length) {
            return msg.channel.createMessage(_(lang, "RATE_NO_ARGS", prefix));
          }

    let question = msg.content.slice(prefix.length + this.name.length + 1);

    let embed = {
        author: {
          name: msg.author.tag,
          icon_url: msg.author.avatarURL,
        },
        title: _(lang, "RATE_EMBED_TITLE"),
        description: randomAnswer(lang),
        color: Math.round(Math.random() * 16777216),
        fields: [
          {
            name: _(lang, "RATE_ITEM"),
            value: question,
          },
        ],
        footer: {
            text: `${client.user.username} © ZariBros`,
            icon_url: client.user.avatarURL,
          },
        };
      
      await msg.channel.createMessage({ embed });
    }}