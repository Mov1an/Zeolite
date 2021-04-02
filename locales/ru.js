module.exports = {
  COMMAND_ERROR_OCCURRED: ":x: Произошла непредвиденная ошибка при выполнении команды.",
  COMMAND_ERROR_DESCRIPTION: "Эта ошибка была выслана разработчикам бота, и будет исправлена в ближайшее время.",
  INVALID_USER_PROVIDED: "> :x: Данного пользователя не существует.",
  DAYS_AGO: days => `(${days} дней назад)`,

  BASIC_GROUP: "Основные команды",
  FUN_GROUP: "Развлекательные команды",
  ZETCOINS_GROUP: "ZetCoins",
  DEV_GROUP: "Команды для разработчиков",
  SETTINGS_GROUP: "Настройки",
  OTHER_GROUP: "Прочие команды",
  MODERATION_GROUP: "Команды модерации",
  NSFW_GROUP: "NSFW команды",

  PING_COMMAND_DESCRIPTION: "пинг бота",
  PING_BOT: ping => `Пинг бота: ${ping} мс.`,
  PING_API: latency => `Пинг API: ${latency} мс.`,

  HELP_COMMAND_DESCRIPTION: "команды бота",
  HELP_COMMAND_USAGE: "[команда]",
  HELP_EMBED_TITLE: `Команды бота`,
  HELP_EMBED_TITLE_OWNER_ONLY: "Команды бота (Только для владельцев)",
  HELP_EMBED_DESC: prefix => `Для получения больше информации о какой-либо команде используйте \`${prefix}help [команда]\`\nЕсть вопросы? Вы можете их задать в [сервере поддержки](https://discord.gg/ZKChwBD).`,
  HELP_COMMAND_DOESNT_EXIST: (name, prefix) => `:x: Команда \`${prefix}${name}\` не существует.`,
  HELP_COMMAND_DOESNT_EXIST_DESC: prefix => `Введите \`${prefix}help\` для получения списка команд.`,
  HELP_COMMAND_TITLE: (name, prefix) => `Справка о \`${prefix}${name}\``,
  HELP_USAGE: "Как использовать",
  HELP_ALIASES: "Псевдонимы",
  HELP_PREFIX: prefix => ` | Префикс на этом сервере: ${prefix}`,

  SERVERINFO_COMMAND_DESCRIPTION: "информация о сервере",
  SERVERINFO_CREATION_DATE: "Дата создания",
  SERVERINFO_DATE_OF_YOUR_JOIN: "Дата вашего входа",
  SERVERINFO_CHANNELS: "Каналы",
  SERVERINFO_MEMBERS: "Участники",
  SERVERINFO_BOTS: "Ботов",
  SERVERINFO_ROLES: "Кол-во ролей",
  SERVERINFO_REGION: "Регион",
  SERVERINFO_TEXT: "текстовые",
  SERVERINFO_VOICE: "голосовые",
  SERVERINFO_CATEGORIES: "категории",
  SERVERINFO_MEMBERS_ONLINE: "в сети",
  SERVERINFO_MEMBERS_IDLE: "не активны",
  SERVERINFO_MEMBERS_DND: "не беспокоить",
  SERVERINFO_MEMBERS_OFFLINE: "не в сети",
  SERVERINFO_MEMBERS_BOTS: "ботов",
  SERVERINFO_MEMBERS_TOTAL: "всего",
  SERVERINFO_EMOJIS: "Эмодзи",
  SERVERINFO_EMOJIS_STATIC: "статичные",
  SERVERINFO_EMOJIS_ANIMATED: "анимированные",
  SERVERINFO_EMOJIS_TOTAL: "всего",
  SERVERINFO_VERIFICATION_LEVEL: "Уровень проверки",
  SERVERINFO_VERIFICATION_LEVELS:[
    "Отсутствует",
    "Низкий",
    "Средний",
    "Высокий",
    "Очень высокий",
  ],
  SERVERINFO_BOOST_LEVEL: "Уровень буста",
  SERVERINFO_BOOST_COUNT: "Бусты",
  SERVERINFO_BOOSTERS: "Бустеры",
  SERVERINFO_OWNER: "Владелец",
  SERVERINFO_FEAUTURES: "Функции сервера",
  FEATURES: {
    INVITE_SPLASH: "фон приглашения",
    VIP_REGIONS: "384 кб/с битрейт",
    VANITY_URL: "своя ссылка",
    VERIFIED: "верифицированный сервер",
    PARTNERED: "партнер Discord",
    PUBLIC: "публичный сервер",
    COMMERCE: "магазинные каналы",
    NEWS: "канал с объявлениями",
    DISCOVERABLE: "доступен в обзоре серверов",
    FEATURABLE: "избранный сервер",
    ANIMATED_ICON: "анимированная иконка",
    BANNER: "баннер сервера",
    PUBLIC_DISABLED: "не может быть публичным",
    WELCOME_SCREEN_ENABLED: "экран с приветствием",
    COMMUNITY: "сообщество",
    MEMBER_VERIFICATION_GATE_ENABLED: "отбор участников",
    PREVIEW_ENABLED: "предпросмотр сервера"
  },
  SERVERINFO_FOOTER: id => `ID: ${id}\nCоздан`,

  STATS_COMMAND_DESCRIPTION: "статистика бота",
  STATS_EMBED_TITLE: "Статистика",
  STATS_UPTIME: "Аптайм",
  STATS_SERVERS: "Серверов",
  STATS_USERS: "Пользователей",
  STATS_LIBRARIES: "Используемые библиотеки",
  STATS_PLATFORM: "Платформа",
  STATS_RAM_USAGE: "ОЗУ используется",
  STATS_MEGABYTES: "МБ",
  STATS_CPU: "Процессор",
  STATS_CANT_GET_CPU_INFO: "Не доступно",
  STATS_CHANNELS: "Каналов",
  STATS_COMMANDS_USED: "Команд использовано",

  USERINFO_COMMAND_DESCRIPTION: "информация о пользователе (или о вас, если пользователь не предоставлен)",
  USERINFO_COMMAND_USAGE: "[пользователь]",
  USERINFO_STATUS: "Статус",
  USERINFO_REGDATE: "Дата регистрации",
  USERINFO_ROLES: "Роли",
  USERINFO_BOT_TITLE: "Бот?",
  USERINFO_BOT_DEFINE: bot => bot ? "Да" : "Нет",
  USERINFO_ZETCOINS_TITLE: "Кол-во ZetCoin'ов",
  USERINFO_ZETCOINS_BALANCE: amount => `${amount} ZetCoin'ов`,
  USERINFO_JOINDATE: "Дата входа на сервер",
  USERINFO_STATUSES: {
    online: "<:d_online:737229035914133604> В сети",
    idle: "<:d_idle:737229035725258752> Не активен",
    dnd: "<:d_dnd:737229034412572712> Не беспокоить",
    offline: "<:d_offline:737229034336813156> Не в сети",
  },
  USERINFO_CUSTOM_STATUS: "Пользовательский статус",
  USERINFO_PLAYING: "Играет в",
  USERINFO_LISTENING: "Слушает",
  USERINFO_STREAMING: "Стримит",
  USERINFO_WATCHING: "Смотрит",
  USERINFO_ZETCOINS_TOP: "Позиция в топе по ZetCoin'ам",
  USERINFO_ZETCOINS_TOP_POS: (globalPos, pos) => `глобальная - ${globalPos}\nна сервере - ${pos}`,
  USERINFO_JOINPOS: joinPos => `${joinPos} участник сервера`,
  NOT_IN_SERVER: "Не является участником сервера",
  USERINFO_COLOR: "Цвет роли",
  USERINFO_DEFAULT_COLOR: "стандартный",
  USERINFO_BADGES: "Значки",
  USERINFO_NO_BADGES: "Этот пользователь не имеет значков",
  USERINFO_FOOTER: id => `ID: ${id}\nЗарегистрировался`,

  _8BALL_COMMAND_DESCRIPTION: "магический шар-восьмерка",
  _8BALL_COMMAND_USAGE: "<вопрос>",
  _8BALL_NO_ARGS_PROMPT: prefix => `> :x: Какой вопрос вы хотите задать шару? Используйте \`${prefix}8ball <вопрос>\``,
  _8BALL_EMBED_TITLE: question => `:8ball: Магический шар-восьмёрка`,
  _8BALL_2_WORDS: "> :x: Вопрос должен состоять как минимум из 2 слов.",
  _8BALL_YOUR_QUESTION: "Ваш вопрос",

  CFLIP_COMMAND_DESCRIPTION: "подбросить монетку",
  CFLIP_HEADS: "Орлом",
  CFLIP_TAILS: "Решкой",
  CFLIP_SIDEWAYS: "Боком",
  CFLIP_EMBED_TITLE: "Монетка приземлилась:",

  SAY_DESCRIPTION: "говорит ваш текст",
  SAY_USAGE: "<текст>",
  SAY_NO_ARGS_PROMPT: prefix => `> :x: Что вы хотите сказать? Используйте ${prefix}say <текст>`,

  BANNED_BALANCE: ":x: Баланс заблокирован разработчиком.",
  BANNED_BALANCE_REASON: reason => `Причина: ${reason || "не предоставлена"}`,
  BALANCE_COMMAND_DESCRIPTION: "показывает ваше (или другого пользователя) кол-во ZetCoin'ов на счету",
  BALANCE_COMMAND_USAGE: "[пользователь]",
  BALANCE_EMBED_AUTHOR_NAME: user => `Баланс ${user.username}#${user.discriminator}`,
  BALANCE_EMBED_DESCRIPTION: amount => `<:zetcoins:766959525864669235> ${amount} ZetCoin'ов.`,
  BALANCE_ALREADY_BANNED: user => `Баланс пользователя ${user.username}#${user.discriminator} забанен.`,
  BALANCE_DEPOSIT: "Депозит",

  BANBALANCE_COMMAND_DESCRIPTION: "банит баланс предоставленного пользователя",
  BANBALANCE_COMMAND_USAGE: "<пользователь> [причина]",
  BANBALANCE_EMBED_TITLE: user => `:white_check_mark: Успешно забанен баланс пользователя ${user.username}#${user.discriminator}`,
  BANBALANCE_EMBED_DESCRIPTION: reason => `Причина: ${reason || "не предоставлена"}`,

  SENDCOINS_COMMAND_DESCRIPTION: "передать указанное кол-во ZetCoin'ов пользователю",
  SENDCOINS_COMMAND_USAGE: "<пользователь> <кол-во>",
  SENDCOINS_NO_ARGS_PROMPT: prefix => `> :x: Кому вы хотите передать ZetCoin'ы? Используйте \`${prefix}sendcoins <пользователь> <кол-во>\``,
  SENDCOINS_NO_AMOUNT: "> :x: Укажите кол-во ZetCoin'ов, которое вы хотите передать.",
  SENDCOINS_AMOUNT_IS_NAN: "> :x: Указанное кол-во не является числом.",
  SENDCOINS_CONFIRMATION_TITLE: (amount, user) => `Вы точно хотите передать ${amount} ZetCoin'ов пользователю **${user.username}#${user.discriminator}**?`,
  SENDCOINS_CONFIRMATION_DESCRIPTION: "Напишите `yes`/`y` или `no`/`n`.\nУ вас 30 секунд для подтверждения.",
  SENDCOINS_SUCCESSFULLY_SENT: (amount, user) => `:white_check_mark: Успешно передано ${amount} ZetCoin'ов пользователю **${user.username + "#" + user.discriminator}**.`,
  SENDCOINS_CANCELLED_TRANSACTION: `:x: Перевод отменен пользователем.`,
  SENDCOINS_NOT_ENOUGH_MONEY: amount => `> :x: Недостаточно средств на счету. Ваш баланс: ${amount} ZetCoin'ов.`,
  SENDCOINS_TIME_EXPIRED: ":x: Время вышло.",
  CANNOT_SEND_COINS_TO_SELF: "> :x: Вы не можете передать ZetCoin'ы самому себе.",
  CANNOT_SEND_COINS_TO_BOT: "> :x: Вы не можете передать ZetCoin'ы боту.",
  CANNOT_SEND_COINS_TO_BANNED_BALANCE: "> :x: Вы не можете переводить ZetCoin'ы пользователю с заблокированным балансом.",

  SETBALANCE_COMMAND_DESCRIPTION: "задает кол-во ZetCoin'ов пользователю",
  SETBALANCE_COMMAND_USAGE: "<пользователь> <кол-во>",
  SETBALANCE_NO_ARGS_PROMPT: prefix => `> Кому вы хотите изменить баланс? Используйте ${prefix}setbalance <пользователь> <кол-во>`,
  SETBALANCE_NO_AMOUNT: "> :x: Укажите кол-во ZetCoin'ов, которое вы хотите задать.",
  SETBALANCE_AMOUNT_IS_NAN: "> :x: Указанное кол-во не является числом.",
  SETBALANCE_EMBED_TITLE: user => `:white_check_mark: Успешно задан баланс пользователю ${user.username + "#" + user.discriminator}`,
  SETBALANCE_EMBED_DESCRIPTION: amount => `Теперь данный пользователь имеет ${amount} ZetCoin'ов`,

  TOP_COMMAND_DESCRIPTION: "топ-10 богатых пользователей на сервере. Используйте ключ -g или --global для глобального топа.",
  TOP_TITLE: name => `Топ сервера ${name}`,
  TOP_TITLE_GLOBAL: "Глобальный топ",
  TOP_FOOTER: (position, balance) => `Ваша позиция в топе - ${position}, баланс - ${balance} ZetCoin'ов.`,
  TOP_BALANCE: balance => `<:zetcoins:766959525864669235> ${balance} ZetCoin'ов.`,

  UNBANBALANCE_COMMAND_DESCRIPTION: "разбанивает баланс пользователя",
  UNBANBALANCE_COMMAND_USAGE: "<пользователь>",
  UNBANBALANCE_SUCCESSFUL_UNBAN: user => `> :white_check_mark: Успешно разбанен баланс пользователя ${user.username + "#" + user.discriminator}`,

  WORK_COMMAND_DESCRIPTION: "получить от 100 до 400 ZetCoin'ов (раз в час)",
  WORK_COOLDOWN_TITLE: ":x: Не так быстро!",
  WORK_COOLDOWN_DESC: time => `Работа будет доступна через **${time}** минут.`,
  WORK_EMBED_TITLE: "Работа",
  WORK_EMBED_DESCRIPTION: (amount, balance) => `**Вы заработали: ${amount}** ZetCoin'ов <:zetcoins:766959525864669235>\n**Ваш баланс: ${balance}** ZetCoin'ов <:zetcoins:766959525864669235>`,

  POLL_COMMAND_DESCRIPTION: "создает опрос из реакций (до 10 вариантов ответа)",
  POLL_COMMAND_USAGE: "<вопрос> <ответы>",
  POLL_NO_ARGS_PROMPT: prefix => `> :x: Какой заголовок опроса? Используйте \`${prefix}poll <вопрос> <ответы>\` (до 10 вариантов ответа)`,
  POLL_NOT_MORE_THAN_10_ANSWERS: "> :x: Не больше, чем 10 вариантов ответа.",
  POLL_NO_ANSWERS: prefix => `> :x: А где ответы? Используйте \`${prefix}poll <вопрос> <ответы>\` (до 10 вариантов ответа)`,
  POLL_STARTED_BY: user => `Начат пользователем ${user.username}#${user.discriminator}`,

  MISSING_PERMISSION: ":x: Вы не имеете разрешений на использование этой команды.",
  MISSING_PERMISSION_DESCRIPTION: permission => `Нужное разрешение: \`${permission}\``,

  DICE_COMMAND_DESCRIPTION: "выиграть или потерять кол-во ZetCoin'ов",
  DICE_COMMAND_USAGE: "<кол-во>",
  DICE_NO_ARGS_PROMPT: prefix => `> :x: Сколько ZetCoin'ов вы хотите поставить? Используйте \`${prefix}dice <кол-во>\``,
  DICE_NOT_ENOUGH_MONEY: balance => `> :x: Недостаточно ZetCoin'ов на счету. Ваш баланс: ${balance} ZetCoin'ов.`,
  DICE_AMOUNT_IS_NAN: "> :x: Указанное кол-во не является числом.",
  DICE_WIN: ":money_with_wings: Выигрыш!",
  DICE_WIN_MESSAGE: (amount, balance) => `Вы выиграли: **${amount}** ZetCoin'ов\nВаш баланс: **${balance + amount}** ZetCoin'ов`,
  DICE_LOSS: ":money_with_wings: Проигрыш",
  DICE_LOSS_MESSAGE: (amount, balance) => `Вы проиграли: **${amount}** ZetCoin'ов\nВаш баланс: **${balance - amount}** ZetCoin'ов`,
  DICE_MORE_THAN_ZERO: "> :x: Сумма должна быть больше, чем 0",

  EVAL_COMMAND_DESCRIPTION: "выполняет JavaScript-код",
  EVAL_COMMAND_USAGE: "<код>",

  COMMANDS_BANNED: ":x: Команды забанены",
  COMMANDS_BANNED_REASON: reason => `Причина: ${reason || "отсутствует"}`,

  BANCOMMANDS_COMMAND_DESCRIPTION: "банит команды указанному пользователю",
  BANCOMMANDS_COMMAND_USAGE: "<пользователь> [причина]",
  BANCOMMANDS_NO_ARGS_PROMPT: prefix => `> :x: Кому вы хотите забанить команды? Введите \`${prefix}bancommands <пользователь> [причина]\``,
  BANCOMMANDS_CANT_BAN_SELF: "> :x: Вы не можете забанить команды самому себе.",
  BANCOMMANDS_CANT_BAN_OTHER_BOT_OWNER: "> :x: Вы не можете забанить команды другому владельцу бота.",
  BANCOMMANDS_USER_ALREADY_BANNED: "> :x: У этого пользователя команды уже были забанены.",
  BANCOMMANDS_SUCCESSFUL_BAN: user => `:white_check_mark: Успешно забанены команды пользователю ${user.username}#${user.discriminator}.`,
  BANCOMMANDS_BAN_REASON: reason => `Причина: ${reason || "нету"}`,

  UNBANCOMMANDS_DESCRIPTION: "разбанивает команды указанному пользователю",
  UNBANCOMMANDS_USAGE: "<пользователь>",
  UNBANCOMMANDS_NO_ARGS_PROMPT: prefix => `> :x: Кому вы хотите разбанить команды? Введите \`${prefix}unbancommands <пользователь>\``,
  UNBANCOMMANDS_USER_ISNT_BANNED: "> :x: У этого пользователя команды не забанены.",
  UNBANCOMMANDS_SUCCESSFUL_UNBAN: user => `:white_check_mark: Успешно разбанены команды пользователю ${user.username}#${user.discriminator}`,

  AVATAR_DESCRIPTION: "показывает ваш аватар или аватар указанного пользователя.\nКлючи могут показать следующее:\n`-s` или `server` - иконку сервера\n`-sp` или `splash` - фон приглашения сервера (если есть)\n`-b` или `banner` - баннер сервера (если есть)",
  AVATAR_USAGE: "[-s/server], [-sp/splash], [-b/banner] или [пользователь]",
  AVATAR_USER: user => `Аватар ${user.username}#${user.discriminator}`,
  SERVER_ICON: server => `Иконка сервера ${server}`,
  SERVER_SPLASH: server => `Фон приглашения сервера ${server}`,
  SERVER_BANNER: server => `Баннер сервера ${server}`,
  NO_ICON: "> :x: На этом сервере отсутствует иконка.",
  NO_SPLASH: "> :x: На этом сервере отсутствует фон приглашения.",
  NO_BANNER: "> :x: На этом сервере отсутствует баннер.",

  LIMITCMD_DESCRIPTION: "ограничить какую-либо команду",
  LIMITCMD_USAGE: "<команда>",
  LIMITCMD_NO_ARGS_PROMPT: prefix => `> :x: Какую команду вы хотите ограничить? Используйте \`${prefix}limitcmd <команда>}\``,
  LIMITCMD_INVALID_COMMAND: "> :x: Такой команды не существует, либо эта команда только для владельцев.",
  COMMAND_ALREADY_LIMITED: "> :x: Эта команда уже ограничена.",
  LIMITCMD_SUCCESS: name => `> :white_check_mark: Команда \`${name}\` успешно ограничена.`,

  UNLIMITCMD_DESCRIPTION: "снимает ограничения с команды",
  UNLIMITCMD_USAGE: "<команда>",
  UNLIMITCMD_NO_ARGS_PROMPT: prefix => `> :x: С какой команды вы хотите снять ограничения? Используйте \`${prefix}unlimitcmd <команда>\``,
  UNLIMITCMD_INVALID_COMMAND: "> :x: Такой команды не существует.",
  UNLIMITCMD_NOT_LIMITED: "> :x: Эта команда не ограничена.",
  UNLIMITCMD_SUCCESS: name => `> :white_check_mark: С команды \`${name}\` сняты ограничения.`,

  LANG_DESCRIPTION: "изменяет ваш язык",
  LANG_USAGE: "[язык]",
  LANG_AVAILABLE_LANGUAGES: "Доступные языки",
  LANG_YOUR_LANGUAGE: "Ваш язык",
  LANG_DEPENDING: "зависит от языка сервера",
  LANG_FOOTER: prefix => `Вы можете изменить язык использовав ${prefix}lang [язык]`,
  LANG_NOT_EXIST: "> :x: Такого языка не существует.",
  LANG_SUCCESS: "> :white_check_mark: Ваш язык был изменен на `ru`",

  SERVERLANG_DESCRIPTION: "изменяет язык сервера по умолчанию",
  SERVERLANG_USAGE: "[язык]",
  SERVERLANG_LANGUAGE: "Язык сервера:",
  SERVERLANG_FOOTER: prefix => `Вы можете изменить язык сервера использовав ${prefix}serverlang [язык]`,
  SERVERLANG_SUCCESS: lang => `> :white_check_mark: Язык сервера был изменен на \`${lang}\``,

  WHATIF_DESCRIPTION: "что если?",
  WHATIF_USAGE: "<что-либо>",
  WHATIF_NO_ARGS: prefix => `> :x: Что если? Используйте \`${prefix}whatif <что-либо>\``,
  WHATIF_2_WORDS: "> :x: Не менее 2 слов.",
  WHATIF_EMBED_TITLE: ":grey_question: Что если?",
  WHATIF_EMBED_DESC: smth => `Что если ${smth}?`,
  WHATIF_ANSWER: "Ответ",
  WHATIF_FOOTER: "Мы не несем ответственности за ответы, так что ни в коем случае не повторяйте это",

  INVITE_DESCRIPTION: "показывает информацию о инвайте",
  INVITE_USAGE: "<инвайт>",
  INVITE_NO_ARGS: prefix => `> :x: О каком инвайте вы хотите полyчить информацию? Используйте \`${prefix}invite <инвайт>\``,
  INVITE_INVALID: "> :x: Инвайт неправильный или истек срок его действия.",
  INVITE_MEMBERS: "Кол-во участников",
  INVITE_MEMBERS_COUNT: (count, online) => `${count} (${online} в сети)`,
  INVITE_VERIFICATION_LEVEL: "Уровень проверки",
  INVITE_VERIFICATION_LEVELS: [
    "Отсутствует",
    "Низкий",
    "Средний",
    "Высокий",
    "Оч. высокий",
  ],
  INVITE_CHANNEL: "Канал",
  INVITE_INVITER: "Приглашающий",
  // INVITE_CODE: code => `Код инвайта: ${code}`,
  INVITE_FEATURES: "Функции",
  INVITE_SERVER_CREATED_AT: "Сервер создан",

  INFO_DESCRIPTION: "информация о боте",
  INFO_EMBED_DESC: "Простой в плане экономики многофункциональный бот, написанный на JavaScript",
  INFO_DEVS: "Разработчики",
  INFO_LINKS: "Ссылки",
  INFO_INVITE: "Добавить меня на свой сервер",
  INFO_SUPPORT_SERVER: "Сервер поддержки",
  INFO_DONATE: "Пожертвовать",

  EMBED_DESCRIPTION: "шлет эмбед из JSON. Вы можете использовать [Discohook](https://discohook.org) или другой генератор эмбедов",
  EMBED_USAGE: "<json>",
  EMBED_NO_ARGS: prefix => `> :x: Какой эмбед вы хотите послать? Используйте \`${prefix}embed <json>\``,
  EMBED_PARSE_ERROR: ":x: Произошла ошибка при обработке JSON",
  EMBED_INVALID: "> :x: Неправильный объект эмбеда.",

  KICK_DESCRIPTION: "кикает указанного пользователя",
  KICK_USAGE: "<пользователь> [причина]",
  KICK_NO_ARGS: prefix => `> :x: Какого пользователя вы хотите кикнуть? Используйте \`${prefix}kick <пользователь> [причина]\``,
  USER_NOT_FOUND: "> :x: Пользователь не найден.",
  KICK_SUCCESS: user => `:white_check_mark: ${user} успешно кикнут.`,
  REASON: reason => `Причина: ${reason || "отсутствует"}`,
  MEMBER_ROLE_HIGHER: "Роль данного пользователя выше вашей.",
  BOT_ROLE_HIGHER: "Роль данного пользователя выше моей.",
  KICK_DONT_HAVE_PERMS: "У меня нет права \"Выгонять участников\".",
  KICK_FAILED: ":x: Кик не удался.",
  CANT_KICK_YOURSELF: "> :x: Вы не можете кикнуть самого себя.",
  CANT_KICK_BOT: "> :x: Вы не можете кикнуть бота.",

  BAN_DESCRIPTION: "банит указанного пользователя",
  BAN_NO_ARGS: prefix => `> :x: Какого пользователя вы хотите забанить? Используйте \`${prefix}ban <пользователь> [причина]\``,
  BAN_SUCCESS: user => `:white_check_mark: ${user} успешно забанен.`,
  BAN_DONT_HAVE_PERMS: "У меня нет права \"Банить участников\".",
  BAN_FAILED: ":x: Бан не удался.",
  CANT_BAN_YOURSELF: "> :x: Вы не можете забанить самого себя.",
  CANT_BAN_BOT: "> :x: Вы не можете забанить бота.",

  PURGE_DESCRIPTION: "удаляет указанное количество сообщений в канале",
  PURGE_USAGE: "<кол-во>",
  PURGE_NO_ARGS: prefix => `> :x: Сколько сообщений вы хотите удалить? Используйте \`${prefix}purge <кол-во>\``,
  AMOUNT_IS_NAN: "> :x: Указанное кол-во не является числом.",
  PURGE_AMOUNT_LESS_THAN_1: "> :x: Кол-во не должно быть меньше 1.",
  PURGE_AMOUNT_MORE_THAN_100: "> :x: Кол-во не должно быть больше 100.",
  PURGE_SUCCESS: amount => `:white_check_mark: Успешно удалено ${amount} сообщений.`,
  PURGE_EMBED_DESC: "Это сообщение удалится через 5 секунд.",

  SOFTBAN_DESCRIPTION: "софтбанит указанного пользователя",
  SOFTBAN_NO_ARGS: prefix => `> :x: Кого вы хотите софтбанить? Используйте \`${prefix}softban <пользователь> [причина]\``,
  CANT_SOFTBAN_YOURSELF: "> :x: Вы не можете софтбанить самого себя.",
  CANT_SOFTBAN_BOT: "> :x: Вы не можете софтбанить бота.",
  SOFTBAN_SUCCESS: user => `:white_check_mark: ${user} успешно софтбанен.`,
  SOFTBAN_FAILED: ":x: Софтбан не удался",

  REVERSE_DESCRIPTION: "реверсит ваш текст",
  REVERSE_USAGE: "<текст>",
  REVERSE_NO_ARGS: prefix => `> :x: Какой текст вы хотите реверснуть? Используйте \`${prefix}reverse <текст>\``,
  REVERSE_TITLE: "Реверс",

  PREFIX_DESCRIPTION: "показывает или изменяет префикс бота на сервере",
  PREFIX_USAGE: "[префикс]",
  PREFIX_DESC: prefix => `Мой префикс на сервере \`${prefix}\`\nВведите \`${prefix}help\` для получения списка команд.`,
  PREFIX_FOOTER: prefix => `Вы можете сменить префикс используя ${prefix}prefix [префикс]`,
  PREFIX_TOO_LONG: "> :x: Префикс не может быть длинее 10 символов.",
  PREFIX_SUCCESS: prefix => `> :white_check_mark: Префикс успешно изменен на \`${prefix}\``,

  DEVSAY_DESCRIPTION: "говорит ваш текст от лица бота",

  RATE_DESCRIPTION: "оценить выбранный вами предмет",
  RATE_USAGE: "<что-либо>",
  RATE_NO_ARGS: prefix => `> :x: Что вы хотите оценить? Используйте \`${prefix}rate <что-либо>\``,
  RATE_EMBED_TITLE: "Оценка",
  RATE_ITEM: "Предмет на оценку",

  RELOAD_DESCRIPTION: "перезагружает команды или языки",
  RELOAD_USAGE: "<команда, langs или all>",
  RELOAD_NO_ARGS: prefix => `> :x: Какую команду вы хотите перезагрузить? Используйте \`${prefix}reload <команда, langs или all>\``,
  RELOAD_SUCCESS: cmd => `:white_check_mark: Команда \`${cmd}\` успешно перезагружена!`,
  RELOAD_ALL_SUCCESS: ":white_check_mark: Все команды успешно перезагружены!",
  RELOAD_LANGS_SUCCESS: ":white_check_mark: Языки успешно перезагружены!",
  RELOAD_COMMAND_DOESNT_EXIST: "> :x: Такой команды не существует.",
  RELOAD_ERROR: cmd => `:x: Произошла ошибка при перезагрузке команды \`${cmd}\``,
  RELOAD_ERROR_ALL: ":x: Произошла ошибка при перезагрузке всех команд",
  RELOAD_ERROR_LANGS: ":x: Произошла ошибка при перезагрузке языков",

  DEPOSIT_DESCRIPTION: "позволяет вам внести или снять ZetCoin'ы с депозита. Используйте эту команду без аргументов для получения подробной информации",
  DEPOSIT_EMBED_TITLE: "Справка по депозитам",
  DEPOSIT_EMBED_DESC: "Вы можете внести деньги на депозит.\nПри этом, вы не сможете использовать их и эта сумма не будет учитываться в топе до того, как вы их снимете.\nКаждые 2 часа будет начисляться 1% от суммы на депозите. Лимит 250000 ZetCoin'ов.",
  DEPOSIT_USAGE: "Как использовать",
  DEPOSIT_USAGE_DESC: prefix => `\`${prefix}deposit put <сумма>\n${prefix}deposit wd <сумма>\``,
  DEPOSIT_NOT_ENOUGH_MONEY: bal => `> :x: Недостаточно средств. Ваш баланс: ${bal} ZetCoin'ов.`,
  DEPOSIT_PUT_SUCCESS: "Успешно внесено в депозит!",
  DEPOSIT_TOTAL: "Депозит",
  DEPOSIT_NOT_ENOUGH_DEPOSIT: bal => `> :x: Недостаточно средств на депозите. Ваш депозит: ${bal} ZetCoin'ов.`,
  DEPOSIT_WD_SUCCESS: "Успешно снято с депозита!",
  DEPOSIT_YOUR_BALANCE: "Ваш баланс",

  RANDOM_DESCRIPTION: "Генерирует рандомное число в указанном диапазоне.\nЕсли указано 1 число, генерирует в диапазоне от 1 до указанного числа",
  RANDOM_USAGE: "<макс> или <мин> <макс>",
  RANDOM_NO_ARGS: prefix => `> :x: В каком диапазоне вы хотите сгенерировать число? Используйте \`${prefix}random <макс> или <мин> <макс>\``,
  RANDOM_NUMBER_IS_NAN: "> :x: Указанное число не является числом.",
  RANDOM_TITLE: (max, min) => `Рандомное число от ${min} до ${max}`,

  EMBEDCOLOR_DESCRIPTION: "Показывает или изменяет ваш цвет эмбеда",
  EMBEDCOLOR_USAGE: "[цвет: #hex или число | random | default]",
  EMBEDCOLOR_YOUR_COLOR: "Ваш цвет эмбеда",
  EMBEDCOLOR_DEFAULT: "стандартный",
  EMBEDCOLOR_FOOTER: prefix => `Используйте ${prefix}embedcolor [цвет: #hex или число | random | default] для изменения цвета эмбеда`,
  EMBEDCOLOR_DEFAULT_SUCCESS: "> :white_check_mark: Ваш цвет эмбеда был изменен на `стандартный`.",
  EMBEDCOLOR_IS_NAN: "> :x: Цвет не является числом.",
  EMBEDCOLOR_SUCCESS: newColor => `> :white_check_mark: Ваш цвет эмбеда был изменен на \`#${newColor}\``,
  EMBEDCOLOR_TOO_BIG: "> :x: Цвет не может быть больше, чем 16777216.",
  EMBEDCOLOR_RANDOM_SUCCESS: "> :white_check_mark: Ваш цвет эмбеда был изменен на `случайный`.",
  EMBEDCOLOR_RANDOM: "случайный",

  WARN_DESCRIPTION: "Выдает предупреждение участнику, также позволяет смотреть предупреждения и удалять их",
  WARN_USAGE: "[-d <id>] [-l [пользователь]] <пользователь> [причина]",
  WARN_NO_ARGS: prefix => `> :x: Кому вы хотите выдать предупреждение? Используйте \`${prefix}warn [-d <id>] [-l [пользователь]] <пользователь> [причина]\``,
  WARN_LIST: "Список предупреждений",
  WARN_ITEM: (id, user) => `Предупреждение ${id} (выдал ${user.tag})`,
  WARN_TOTAL: total => `Всего предупреждений: ${total}`,
  WARN_DELETE_NO_ID: "> :x: ID предупреждения не указан.",
  WARN_INVALID_ID: "> :x: Такого предупреждения не существует или оно расположено на другом сервере.",
  WARN_DELETE_SUCCESS: id => `> :white_check_mark: Предупреждение с ID \`${id}\` удалено.`,
  CANT_WARN_YOURSELF: "> :x: Вы не можете выдать предупреждение самому себе.",
  CANT_WARN_BOTS: "> :x: Вы не можете выдать предупреждение боту.",
  WARN_SUCCESS: user => `:white_check_mark: Выдано предупреждение ${user}`,
  WARN_ID: id => `ID предупреждения: ${id}`,
  WARN_FAILED: ":x: Не удалось выдать предупреждение",
  WARN_FAILED_REASON: "Роль этого пользователя выше вашей.",

  ROLE_DESCRIPTION: "Показывает информацию о роли",
  ROLE_USAGE: "<роль>",
  ROLE_CREATED_AT: "Создана",
  ROLE_NOT_FOUND: "> :x: Роль не найдена.",
  ROLE_MEMBERS: "Кол-во участников с этой ролью",
  ROLE_MENTIONABLE: "Упоминаемая?",
  ROLE_HOISTED: "Показывается отдельно?",
  ROLE_MANAGED: "Управляется интеграцией?",
  YES_NO: what => what ? "Да" : "Нет",
  ROLE_COLOR: "Цвет",
  ROLE_COLOR_DEFAULT: "Стандартный",
  
  DEMOTIVATOR_DESCRIPTION: "Создает демотиватор.\nКлюч -w позволяет создать белый демотиватор.\nИспользуйте двойные кавычки для текста и нижнего текста.",
  DEMOTIVATOR_USAGE: "[-w] <текст> <нижний текст> <изображение: url или вложение>",
  DEMOTIVATOR_NO_BOTTOM_TEXT: "> :x: Укажите нижний текст.",
  DEMOTIVATOR_NO_IMAGE: "> :x: Укажите изображение.",
  DEMOTIVATOR_IMAGE_FAILED: "> :x: Не удалось загрузить изображение.",
  
  TAGS_DESCRIPTION: "Позволяет вам управлять тегами.\nИспользуйте эту команду без аргументов для получения подробной информации",
  TAGS_USAGE: "[субкоманда]",
  TAGS_HELP: "Справка по тегам",
  TAGS_HELP_DESC: prefix => `\`${prefix}tags <имя>\` - получить содержимое тега\n` +
    `\`${prefix}tags add <имя> <содержимое>\` - добавить тег\n` +
    `\`${prefix}tags edit <имя> <новое содержимое>\` - редактировать существующий тег\n` +
    `\`${prefix}tags transfer <имя> <новый владелец>\` - передать тег другому пользователю\n` +
    `\`${prefix}tags owner <тег>\` - информация о владельце тега\n` +
    `\`${prefix}tags delete <тег>\` - удалить тег\n` +
    `\`${prefix}tags list <страница>\` - список всех тегов на сервере`,
  TAG_NOT_FOUND: "> :x: Тег не найден.",
  TAGS_NO_NAME: "> :x: Имя тега не предоставлено.",
  TAGS_NO_CONTENT: "> :x: Содержимое тега не предоставлено.",
  TAG_ALREADY_EXIST: "> :x: Тег уже существует.",
  TAG_NAME_TOO_BIG: "> :x: Имя тега не может быть длинее 128 символов.",
  TAGS_ADD_SUCCESS: name => `> :white_check_mark: Тег \`${name}\` успешно добавлен.`,
  TAGS_NOT_OWNER: "> :x: Данного тега не существует либо вы не владеете им.",
  TAGS_EDIT_SUCCESS: name => `> :white_check_mark: Тег \`${name}\` успешно отредактирован.`,
  TAGS_TRANSFER_SUCCESS: (name, user) => `> :white_check_mark: Тег \`${name}\` передан пользователю \`${user}\`.`,
  TAGS_OWNER: (name, user) => `> :information_source: Тег \`${name}\` создан пользователем \`${user}\``,
  TAGS_INVALID_PAGE_NUMBER: "> :x: Неправильный номер страницы.",
  TAGS_LIST: "Список тегов",
  TAGS_LIST_FOOTER: (currentPage, totalPages, totalTags) => `Страница ${currentPage} из ${totalPages} | Всего тегов: ${totalTags}`,

  WHOIS_DESCRIPTION: "Указывает случайного пользователя",
  WHOIS_USAGE: "<что-либо>",
  WHOIS_EMBED_DESC: smth => `Кто ${smth}?`,
  WHOIS_ANSWER: "Ответ",

  DISCRIM_DESCRIPTION: "Показывает до 20 пользователей, которые имеют указанный дискриминатор",
  DISCRIM_USAGE: "[дискриминатор]",
  INVALID_DISCRIM: "> :x: Дискриминатор должен быть в диапазоне от 0001 до 9999",
  DISCRIM_TITLE: discrim => `Пользователи с дискриминатором #${discrim}`,
  DISCRIM_USERS_NOT_FOUND: "Сейчас я не вижу пользователей с таким дискриминатором",
  
  BOORU_USAGE: "<теги>",
  NOT_NSFW_CHANNEL: "> :x: Канал не помечен как NSFW.",
  POST_NOT_FOUND: "> :x: Пост не найден.",
  NOT_MORE_THAN_2_TAGS: "> :x: Не больше, чем 1 тег",
  BOORU_TITLE: "Пост (кликабельно)",
  BOORU_CREATEDAT: "Создан",
  BOORU_TAGS: "Теги",
  BOORU_SCORE: "Кол-во очков",
  BOORU_SOURCE: "Источник", 
  BOORU_RATING: "Рейтинг",
  BOORU_RATINGS: {
    s: "Безопасный",
    q: "Под вопросом",
    e: "Откровенный",
    u: "Без рейтинга",
    },

  PAHEAL_DESCRIPTION: "Ищет paheal-посты по тегу.\nТребуется канал помеченный как NSFW",

  RULE34_DESCRIPTION: "Получает rule34-пост по тегам.\nЭта команда требует канал помеченный как NSFW",

  DANBOORU_DESCRIPTION: "Ищет danbooru-посты по тегу.\nТребуется канал помеченный как NSFW",
  DANBOORU_USAGE: "<тег> (не больше, чем 1 тег)",

  TRANSLATE_DESCRIPTION: "переводит текст на указанный язык",
  TRANSLATE_USAGE: "<язык> <текст>",
  TRANSLATE_NO_TEXT: "> :x: Укажите текст.",
  TRANSLATE_INVALID_LANG: "> :x: Язык неверно указан.",
  TRANSLATE_TITLE: fromLang => `Переводчик (переведено с ${fromLang})`,

  COLOR_DESCRIPTION: "Показывает информацию о указанном цвете",
  COLOR_USAGE: "<цвет: #hex или число>",
  COLOR_NUMBER: "Число",
};