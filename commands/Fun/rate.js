const answers = {
    ru: [
      '**?/10**\nчё',
      '**?/10**\nПставь псису ыаававы эээм... пук',
      '**?/10**\nЯ просто чайник ебанный как это понять',
      '**?/10**\nПацанчики, объясните мем чайнику',
      '**?/10**\nКаво?',
      '**?/10**\nКаво и шо?',
      '**NaN/10**\nNaN',
      '**NaN/10**\nСука опять эту хуйню чинить, заебали.',
      '**NaN/10**\nНу NaN и NaN чё бубнить то?',
      '**-∞/10**\nИДИ СЮДА ГОВНО ЕБАНОЕ СЕЙЧАС ЕБАЛО ТЕБЕ БУДЕМ ПРОДАВАТЬ МРАЗЬ',
      '**-∞/10**\nПошёл нахуй воняешь',
      '**-∞/10**\nБрах (хуях)',
      '**-100/10**\nА что звучит хайпово',
      '**-100/10**\nВышел нахуй воняешь',
      '**-100/10**\nБрух)',
      '**-100/10**\nалло долбоёб блять',
      '**-10/10**\nБраво, по-мужски, просто охуенно, уёбок!',
      '**-10/10**\nУёбывай воняешь',
      '**-10/10**\nИменно ты этого и добивался?',
      '**-10/10**\nБрах)',
      '**-10/10**\nА по шее?',
      '**-10/10**\nА по жопе?',
      '**-10/10**\nЧто-то мне подсказывает что Илону Маску далеко похуй на эту хуетень',
      '**-10/10**\nКто это сделал? Пидорас, бедная писька освободите, долой трусы - свободу письке блять',
      '**-10/10**\nЗвучит хорошо (super huevo)',
      '**-2/10**\nНу это пиздец, мир сошёл с ума, блять пиздец.',
      '**0/10**\nЭто как понять паскуда? А?',
      '**0/10**\nНихуя не интересно но очень понял!',
      '**0/10**\n:arrow_up::arrow_up::arrow_up:\nА куда пойти? Как куда? Конечно же нахуй!)',
      '**0/10**\nСпс за кибербуллинг',
      '**0/10**\nСТАВКИ НА ПОПС! Кхм-кхм... Работать иди долбоёб',
      '**0/10**\nBruh)',        
      '**0/10**\nА... Ну ясненько! Удачи парнише и весёлых приключений!',
      '**0/10**\nНИХРЕНА ТЫ ВЫДУМАЛ',
      '**0/10**\nВыйди воняешь',
      '**0/10**\n:candle: RIP УМЕР ОТ ВОНИ ТРУСОВ',
      '**0/10**\nОго! Пошёл нахуй!',
      '**0/10**\nЧё за хуйня, а ну переделывай',
      '**0/10**\nУгу. Ага. Да-да. Круто. Хайпово.',
      '**0/10**\nХуйня давай ещё',
      '**0/10**\nА ну нахуй с поля!',
      '**0/10**\nАничё)',
      '**0/10**\nты чо сука самый умный блядь?',
      '**0/10**\nЗвучит неплохо (хуёво)',
      '**0/10**\nТы мне должен самоходный стреловой кран LTM 11200-9.1',
      '**0/10**\nNot funny didn\'t laugh.',
      '**0/10**\nЧтобы все знали что автор - даун.',
      '**1/10**\n:star: you tried',
      '**1/10**\nвжжж вррр че говориш не слишу',
      '**1/10**\nАчё хуй через пле\*чё)',
      '**1/10**\nТы - самое слабое звено, пошёл нахуй',
      '**1/10**\nТебе смешно а мне обидно, тебе говно а мне повидло',
      '**1/10**\nТут не то что смеяться, а плакать надо',
      '**1/10**\nФу блять',
      '**1/10**\nдурак блять.',
      '**1/10**\nгнида блять.',
      '**1/10**\nДавай по новой Миша, всё хуйня',
      '**1/10**\nМИША УЙДИ!!!',
      '**1/10**\n:candle: *пиздец...*',
      '**1/10**\n:candle: *Похуй...*',
      '**1/10**\nРот закрой, не позорься',
      '**1/10**\nХуйня: Какать по-королевски',
      '**1/10**\nГляньте, чё несёт, дурной.',
      '**1/10**\nА завали-ка ебало',
      '**1/10**\nТакие дела, соси хуй быдло.',
      '**1/10**\nТакие пироги, соси хуй быдло.',
      '**1/10**\nНеплохо кринжуешь, брат.',
      '**2/10**\nГовно переделывай',
      '**2/10**\nТы на меня буквы не повышай, мой хороший!',
      '**2/10**\nНихуя, садись 2',
      '**2/10**\n:knife: иди сюда',
      '**2/10**\nЭто что за выходцы из ютуб кидс?',
      '**2/10**\nХорошая (хуёвая) работа Олег!',
      '**2/10**\nВы думали это рофл? А пацанчик-то реально умер',
      '**2/10**\nС такими приколами тебе в одноклассники',
      '**2/10**\nТебе пора по съёбам, пацанчик...',
      '**2/10**\nЯ по ржал но не сильно, не занимайся юмором иначе я тебе ебальник снесу.',
      '**2/10**\nНе занимайся юмором иначе я тебе ебальник снесу.',
      '**3/10**\n:family: Бля',
      '**3/10**\nМиссия проёбана',
      '**3/10**\nВау',
      '**3/10**\nХуйня! Давай по-новой!',
      '**3/10**\nнесмешно',
      '**3/10**\nВон отсюда сука не заходи сюда блядь, тварь ёбаная блядь.',
      '**3/10**\n<:sasavrHeadphones:802901813572403221> а где звук ёпта',
      '**4/10**\nПрикола нихуя не понял но неплохо.',
      '**4/10**\nТак, але, я не понял, ЭТО ЧЕ?',
      '**4/10**\nЗаткни пасть свою, а.',
      '**4/10**\nААААААААААААААА',
      '**4/10**\nААААААААААААА!!! СУКА!!!',
      '**4/10**\nА где пятый?',
      '**5/10**\nДед доест',
      '**5/10**\nНихуя, садись 5',
      '**5/10**\nМы нашли пятого',
      '**5/10**\nПосле этого я купил пакет из Пятёрочки',
      '**6/10**\n:pensive: Охуеть',
      '**6/10**\nОп ахах)',
      '**7/10**\nАчё)',
      '**7/10**\nПриходи не воняешь',
      '**7/10**\nУ меня нет слов',
      '**8/10**\nОтдай',
      '**8/10**\n:fork_and_knife: Доем родных, доем друзей',
      '**8/10**\nНормально',
      '**10/10**\nСмотрите и учитесь девачьки)',
      '**10/10**\nЗвучит неплохо',
      '**10/10**\nКак тебе такое, Илон Маск?',
      '**10/10**\nDenza Faradenza, la bokka de lä cokka)',
      '**10/10**\nДенза фараденза)',
      '**10/10**\nСпасибо, я кончил',
      '**10/10**\nСпасибо, я покакал',
      '**10/10**\nВы думали это умер? А пацанчик-то реально рофл',
      '**10/10**\nЯ купил себе новые трусы.',
      '**10/10**\nСука опять дрочить! Только что подрочил суки!!!',
      '**10/10**\nТолстенькая, толстенькая.',
      '**10/10**\nОт души душевно в душу!',
      '**10/10**\n:flushed: Охуеть спасибо папаша',
      '**10/10**\n:clap: Я просто похлопаю',
      '**10/10**\n:clap: Аплодирую стоя!! Молодчина!!',
      '**10/10**\nЯ снимаю с неё нижнее бельё, ох этот волнительный процесс...',
      '**10/10**\nМолодец :kissing_heart:',
      '**10/10**\nНихуя не понял но очень интересно!',        
      '**10/10**\nВот это РЕАЛЬНО нихуёвая смешнявка, смотрите и учитесь!',
      '**10/10**\nВот это смекалочка! Молодчина! США в шоке!!!',
      '**11/10**\n:watermelon: Пиздатые огурцы',
      '**11/10**\nТут не то что плакать, а смеяться надо',
      '**11/10**\nТвёрдая десятка!',
      '**11/10**\n:flushed: нефига себя иди на хуй',
      '**12/10**\nвот это заебись, богоугодная хуйня :thumbsup:',
      '**100/10**\n:flushed: Нихуёво',
      '**100/10**\nОп ахах неловко вышло)',
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
      '**1/10**\nUgh...',
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
  argsRequired: true,
  async run(client, msg, args, prefix, lang) {
    if (!args.length) {
      return msg.reply(_(lang, "RATE_NO_ARGS", prefix));
    }

    let question = msg.content.slice(prefix.length + this.name.length + 1);

    let embed = {
        author: {
          name: msg.author.tag,
          icon_url: msg.author.avatarURL,
        },
        title: _(lang, "RATE_EMBED_TITLE"),
        description: randomAnswer(lang),
        color: await msg.author.embedColor(),
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
      
      await msg.reply({ embed });
  }
}
