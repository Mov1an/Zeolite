module.exports = {
    INVALID_USER_PROVIDED: "> :x: Данного пользователя не существует.",
    BASIC_GROUP: "Основные команды",
    FUN_GROUP: "Развлекательные команды",
    ZETCOINS_GROUP: "ZetCoins",
    DEV_GROUP: "Команды для разработчиков",
    SETTINGS_GROUP: "Настройки",
  OTHER_GROUP: "Прочие команды",
  MODERATION_GROUP: "Команды модерации",
    PING_COMMAND_DESCRIPTION: "пинг бота",
  PING_EMBED_TITLE: "Пинг бота:",
  PING_EMBED_DESCRIPTION: latency => `${latency} мс.`,
  HELP_COMMAND_DESCRIPTION: "команды бота",
  HELP_COMMAND_USAGE: "[команда]",
  HELP_EMBED_TITLE: (page, max) => `Команды бота (Страница ${page} из ${max})`,
  HELP_EMBED_TITLE_OWNER_ONLY: "Команды бота (Только для владельцев)",
  HELP_COMMAND_DOESNT_EXIST: (name, prefix) => `Команда \`${prefix}${name}\` не существует.`,
  HELP_COMMAND_DOESNT_EXIST_DESC: prefix => `Введите \`${prefix}help\` для получения списка команд.`,
  HELP_COMMAND_TITLE: (name, prefix) => `Справка о \`${prefix}${name}\``,
  HELP_USAGE: "Как использовать",
  HELP_ALIASES: "Псевдонимы",
  SERVERINFO_COMMAND_DESCRIPTION: "информация о сервере",
  SERVERINFO_CREATION_DATE: "Дата создания",
  SERVERINFO_DATE_OF_YOUR_JOIN: "Дата вашего входа",
  SERVERINFO_CHANNELS: "Каналов",
  SERVERINFO_MEMBERS: "Участников",
  SERVERINFO_BOTS: "Ботов",
  SERVERINFO_ROLES: "Ролей",
  SERVERINFO_REGION: "Регион",
  STATUS_COMMAND_DESCRIPTION: "статистика бота",
  STATUS_EMBED_TITLE: "Статистика",
  STATUS_UPTIME: "Аптайм",
  STATUS_SERVERS: "Серверов",
  STATUS_USERS: "Пользователей",
  STATUS_LIBRARIES: "Используемые библиотеки",
  STATUS_PLATFORM: "Платформа",
  STATUS_RAM_USAGE: "ОЗУ используется",
  STATUS_MEGABYTES: "МБ",
  USERINFO_COMMAND_DESCRIPTION: "информация о пользователе (или о вас, если пользователь не предоставлен)",
  USERINFO_COMMAND_USAGE: "[пользователь]",
  USERINFO_STATUS: "Статус",
  USERINFO_REGDATE: "Дата регистрации",
  USERINFO_ROLES: "Роли",
  USERINFO_BOT_TITLE: "Бот?",
  USERINFO_BOT_DEFINE: bot => bot ? "Да" : "Нет",
  USERINFO_ZETCOINS_TITLE: "Кол-во ZetCoin'ов",
  USERINFO_ZETCOINS_BALANCE: amount => `${amount} ZetCoin'ов`,
  USERINFO_CREATED_DAYS_AGO: days => `(${days} дней назад)`,
  _8BALL_COMMAND_DESCRIPTION: "магический шар-восьмерка",
  _8BALL_COMMAND_USAGE: "<вопрос>",
  _8BALL_NO_ARGS_PROMPT: prefix => `> :x: Какой вопрос вы хотите задать шару? Используйте \`${prefix}8ball <вопрос>\``,
  _8BALL_EMBED_TITLE: question => `:question: Ваш вопрос: ${question}`,
  _8BALL_2_WORDS: "> :x: Вопрос должен состоять как минимум из 2 слов.",
  CFLIP_COMMAND_DESCRIPTION: "подбросить монетку",
  CFLIP_HEADS: "Орлом",
  CFLIP_TAILS: "Решкой",
  CFLIP_SIDEWAYS: "Боком",
  CFLIP_EMBED_TITLE: "Монетка приземлилась:",
  SAY_COMMAND_DESCRIPTION: "говорит ваш текст",
  SAY_COMMAND_USAGE: "<текст>",
  SAY_NO_ARGS_PROMPT: prefix => `> :x: Что вы хотите сказать? Используйте ${prefix}say <текст>`,
  BANNED_BALANCE: ":x: Ваш баланс забанен",
  BANNED_BALANCE_REASON: reason => `Причина: ${reason || "не предоставлена"}`,
  BALANCE_COMMAND_DESCRIPTION: "показывает ваше (или другого пользователя) кол-во ZetCoin'ов на счету",
  BALANCE_COMMAND_USAGE: "[пользователь]",
  BALANCE_EMBED_AUTHOR_NAME: user => `Баланс ${user.username}#${user.discriminator}`,
  BALANCE_EMBED_DESCRIPTION: amount => `${amount} ZetCoin'ов.`,
  BALANCE_ALREADY_BANNED: user => `Баланс пользователя ${user.username}#${user.discriminator} забанен.`,
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
  SENDCOINS_CONFIRMATION_DESCRIPTION: "Напишите 'yes' или 'no'. У вас есть 30 секунд для подтверждения.",
  SENDCOINS_SUCCESSFULLY_SENT: (amount, user) => `:white_check_mark: Успешно передано ${amount} ZetCoin'ов пользователю **${user.username + "#" + user.discriminator}**.`,
  SENDCOINS_CANCELLED_TRANSACTION: `:x: Вы отменили перевод.`,
  SENDCOINS_NOT_ENOUGH_MONEY: amount => `> :x: Недостаточно средств на счету. Ваш баланс: ${amount} ZetCoin'ов.`,
  CANNOT_SEND_COINS_TO_SELF: "> :x: Вы не можете передать ZetCoin'ы самому себе.",
  SETBALANCE_COMMAND_DESCRIPTION: "задает кол-во ZetCoin'ов пользователю",
  SETBALANCE_COMMAND_USAGE: "<пользователь> <кол-во>",
  SETBALANCE_NO_ARGS_PROMPT: prefix => `> Кому вы хотите изменить баланс? Используйте ${prefix}setbalance <пользователь> <кол-во>`,
  SETBALANCE_NO_AMOUNT: "> :x: Укажите кол-во ZetCoin'ов, которое вы хотите задать.",
  SETBALANCE_AMOUNT_IS_NAN: "> :x: Указанное кол-во не является числом.",
  SETBALANCE_EMBED_TITLE: user => `:white_check_mark: Успешно задан баланс пользователю ${user.username + "#" + user.discriminator}`,
  SETBALANCE_EMBED_DESCRIPTION: amount => `Теперь данный пользователь имеет ${amount} ZetCoin'ов`,
  TOP_COMMAND_DESCRIPTION: "топ-10 богатых пользователей на сервере",
  TOP_EMBED_TITLE: "Топ-10 богатых пользователей на сервере",
  TOP_BALANCE: balance => `${balance} ZetCoin'ов.`,
  UNBANBALANCE_COMMAND_DESCRIPTION: "разбанивает баланс пользователя",
  UNBANBALANCE_COMMAND_USAGE: "<пользователь>",
  UNBANBALANCE_SUCCESSFUL_UNBAN: user => `> :white_check_mark: Успешно разбанен баланс пользователя ${user.username + "#" + user.discriminator}`,
  WORK_COMMAND_DESCRIPTION: "получить от 100 до 400 ZetCoin'ов (раз в час)",
  WORK_COOLDOWN: "> :x: Вы не можете работать чаще, чем раз в час.",
  WORK_EMBED_TITLE: ":money_with_wings: Вы заработали:",
  WORK_EMBED_DESCRIPTION: amount => `${amount} ZetCoin'ов.`,
  POLL_COMMAND_DESCRIPTION: "создает опрос из реакций (до 10 вариантов ответа)",
  POLL_COMMAND_USAGE: "<вопрос> <ответы>",
  POLL_NO_ARGS_PROMPT: prefix => `> :x: Какой заголовок опроса? Используйте \`${prefix}poll <вопрос> <ответы>\` (до 10 вариантов ответа)`,
  POLL_NOT_MORE_THAN_10_ANSWERS: "> :x: Не больше, чем 10 вариантов ответа.",
  POLL_NO_ANSWERS: prefix => `> :x: А где ответы? Используйте \`${prefix}poll <вопрос> <ответы>\` (до 10 вариантов ответа)`,
  POLL_STARTED_BY: user => `Начат пользователем ${user.username}#${user.discriminator}`,
  LANGUAGE_COMMAND_DESCRIPTION: "задает язык бота на сервере",
  LANGUAGE_COMMAND_USAGE: "[язык]",
  LANGUAGE_EMBED_TITLE: "Языки:",
  LANGUAGE_LIST: "```en: Английский\nru: Русский```",
  LANGUAGE_IS_NOT_EXIST: "> :x: Данного языка не существует.",
    LANGUAGE_SUCCESSFUL_SET: lang => `> :white_check_mark: Язык успешно изменен на \`${lang}\`.`,
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
  DM_COMMAND_DESCRIPTION: "отправляет сообщение указанному пользователю",
  DM_COMMAND_USAGE: "<пользователь> <текст>",
  DM_NO_ARGS_PROMPT: prefix => `> :x: Что вы хотите послать пользователю? Используйте \`${prefix}dm <пользователь> <текст>\``,
  DM_NO_CONTENT_TO_SEND: "> :x: Пожалуйста, укажите текст сообщения, который вы хотите послать.",
  DM_ANSWER_SENT: "Ответ выслан:",
  LINKS_COMMAND_DESCRIPTION: "некоторые полезные ссылки",
  LINKS_EMBED_TITLE: "Ссылки",
  LINKS_EMBED_DESCRIPTION: "[Приглашение бота](https://discordapp.com/oauth2/authorize?client_id=679692205736460301&scope=bot&permissions=8)\n[Сервер поддержки](https://discord.gg/e6V38mv)",
  COMMANDS_BANNED: ":x: Команды забанены",
  COMMANDS_BANNED_REASON: reason => `Причина: ${reason || "отсутствует"}`,
  BANCOMMANDS_COMMAND_DESCRIPTION: "банит команды указанному пользователю",
  BANCOMMANDS_COMMAND_USAGE: "<пользователь> [причина]",
  BANCOMMANDS_NO_ARGS_PROMPT: prefix => `> :x: Кому вы хотите забанить команды? Введите \`${prefix}bancommands <пользователь> [причина]\``,
  BANCOMMANDS_CANT_BAN_SELF: "> :x: Вы не можете забанить команды самому себе.",
  BANCOMMANDS_CANT_BAN_OTHER_BOT_OWNER: "> :x: Вы не можете забанить команды другому владельцу бота.",
  BANCOMMANDS_USER_ALREADY_BANNED: "> :x: Пользователь уже был забанен.",
  BANCOMMANDS_SUCCESSFUL_BAN: user => `:white_check_mark: Успешно забанены команды пользователю ${user.username}#${user.discriminator}.`,
  BANCOMMANDS_BAN_REASON: reason => `Причина: ${reason || "нету"}`,
  UNBANCOMMANDS_DESCRIPTION: "разбанивает команды указанному пользователю",
  UNBANCOMMANDS_USAGE: "<пользователь>",
  UNBANCOMMANDS_NO_ARGS_PROMPT: prefix => `> :x: Кому вы хотите разбанить команды? Введите \`${prefix}unbancommands <пользователь>\``,
  UNBANCOMMANDS_USER_ISNT_BANNED: "> :x: Данный пользователь не забанен.",
  UNBANCOMMANDS_SUCCESSFUL_UNBAN: user => `:white_check_mark: Успешно разбанены команды пользователю ${user.username}#${user.discriminator}`,
  AVATAR_DESCRIPTION: "показывает ваш аватар или аватар указанного пользователя. Ключ -s позволяет получить иконку сервера",
  AVATAR_USAGE: "[-s] или [пользователь]",
  AVATAR_USER: user => `Аватар ${user.username}#${user.discriminator}`,
  SERVER_ICON: "Иконка сервера",
  NOTES_DESCRIPTION: "позволяет вам управлять заметками",
  NOTES_USAGE: "<субкоманда> или <имя>",
  NOTES_ADD_USAGE: prefix => `> :x: Какую заметку вы хотите добавить? Используйте \`${prefix}notes add <имя> <содержание>\``,
  NOTES_INVALID_NAME: "> :x: Вы не можете создать заметку с таким именем.",
  NOTES_NO_CONTENT: "> :x: Заметка не может быть пустой.",
  NOTE_ADD_SUCCESS: name => `> :white_check_mark: Добавлена заметка \`${name}\`.`,
  NOTE_ALREADY_EXIST: "> :x: Заметка уже существует.",
  NOTES_LIST: ":notepad_spiral: Ваши заметки",
  NOTES_EDIT_USAGE: prefix => `> :x: Какую заметку вы хотите изменить? Используйте \`${prefix}notes edit <имя> <новое содержание>\``,
  NOTE_EDIT_SUCCESS: name => `> :white_check_mark: Изменена заметка \`${name}\`.`,
  NOTE_NOT_FOUND: "> :x: Заметка не найдена.",
  NOTES_DELETE_USAGE: prefix => `> :x: Какую заметку вы хотите удалить? Используйте \`${prefix}notes delete <имя>\``,
  NOTE_DELETE_SUCCESS: name => `> :white_check_mark: Удалена заметка \`${name}\``,
  NOTES_USAGE_EMBED: "Справка по заметкам",
  NOTES_USAGE_EMBED_DESCRIPTION: prefix => {
      return `\`${prefix}notes <имя>\` - получить заметку\n` +
        `\`${prefix}notes add <имя> <содержание>\` - создать заметку\n` +
        `\`${prefix}notes edit <имя> <новое содержание>\` - изменить существующую заметку\n` +
        `\`${prefix}notes delete <имя>\` - удалить заметку\n` +
        `\`${prefix}notes list\` - список ваших заметок`;
    },
  NOTES_NO_NOTES: "> У вас нет каких-либо заметок.",
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
  SUPPORT_DESCRIPTION: "задать вопрос разработчикам бота",
  SUPPORT_USAGE: "<вопрос>",
  SUPPORT_NO_ARGS_PROMPT: prefix => `> :x: Какой вопрос вы хотите задать? Используйте \`${prefix}support <вопрос>\``,
  SUPPORT_EMPTY_QUESTION: "> :warning: Вопрос не может быть пустым.",
  SUPPORT_SUCCESS: ":white_check_mark: Ваш вопрос отправлен разработчикам",
  SUPPORT_SUCCESS_DESC: ":clock9: Это может занять некоторое время. Заваривайте себе чаек и ждите примерно 5-10 минут",
  RESPOND_DESCRIPTION: "ответить на вопрос",
  RESPOND_USAGE: "<id> <ответ>",
  RESPOND_NO_ARGS_PROMPT: prefix => `На какой вопрос вы хотите ответить? Используйте \`${prefix}respond <id> <ответ>\``,
  RESPOND_INVALID_ID: "> :x: Неверный ID.",
  RESPOND_SENT: ":mailbox_with_mail: Ответ выслан:",
  RESPOND_YOUR_QUESTION: "Ваш вопрос:",
  LANG_DESCRIPTION: "изменяет ваш язык",
  LANG_USAGE: "[язык]",
  LANG_AVAILABLE_LANGUAGES: "Доступные языки:",
  LANG_YOUR_LANGUAGE: "Ваш язык:",
  LANG_DEPENDING: "зависит от языка сервера",
  LANG_FOOTER: prefix => `По вашему желанию вы можете сменить язык, написав ${prefix}lang [язык]`,
  LANG_NOT_EXIST: "> :x: Такого языка не существует.",
  LANG_SUCCESS: "> :white_check_mark: Ваш язык был изменен на `ru`",
  SERVERLANG_DESCRIPTION: "изменяет язык сервера по умолчанию",
  SERVERLANG_USAGE: "[язык]",
  SERVERLANG_LANGUAGE: "Язык сервера:",
  SERVERLANG_FOOTER: prefix => `По вашему желанию вы можете изменить язык сервера, написав ${prefix}serverlang [язык]`,
  SERVERLANG_SUCCESS: lang => `> :white_check_mark: Язык сервера был изменен на \`${lang}\``,
  WHATIF_DESCRIPTION: "что если?",
  WHATIF_USAGE: "<что-либо>",
  WHATIF_NO_ARGS: prefix => `> :x: Что если? Используйте \`${prefix}whatif <что-либо>\``,
  WHATIF_2_WORDS: "> :x: Не менее 2 слов.",
  WHATIF_EMBED_TITLE: ":grey_question: Что если?",
  WHATIF_EMBED_DESC: smth => `Что если ${smth}?`,
  WHATIF_ANSWER: "Мне подсказывает моя интуиция, что...",
  WHATIF_FOOTER: "Мы не несем ответственности за ответы, так что ни в коем случае не повторяйте это",
  INVITE_DESCRIPTION: "показывает информацию о инвайте",
  INVITE_USAGE: "<инвайт>",
  INVITE_NO_ARGS: prefix => `> :x: О каком инвайте вы хотите полyчить информацию? Используйте \`${prefix}invite <инвайт>\``,
  INVITE_INVALID: "> :x: Инвайт неправильный или истек срок его действия.",
  INVITE_MEMBERS: "Кол-во участников:",
  INVITE_VERIFICATION_LEVEL: "Уровень проверки:",
  INVITE_VERIFICATION_LEVELS: [
    "Отсутствует",
    "Низкий",
    "Средний",
    "Высокий",
    "Оч. высокий",
  ],
  INVITE_CHANNEL: "Канал:",
  INVITE_INVITER: "Приглашающий:",
  INVITE_CODE: code => `Код инвайта: ${code}`,
  INFO_DESCRIPTION: "информация о боте",
  INFO_EMBED_DESC: "Простой в плане экономики многофункциональный бот, написанный на JavaScript",
  INFO_DEVS: "Разработчики",
  INFO_LINKS: "Ссылки",
  INFO_INVITE: "Добавить бота на свой сервер",
  INFO_SUPPORT_SERVER: "Сервер поддержки",
  INFO_DONATE: "Поддержать проект",
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
  PURGE_EMBED_DESC: "Это сооьщение удалится через 5 секунд.",
  SOFTBAN_DESCRIPTION: "софтбанит указанного пользователя",
  SOFTBAN_NO_ARGS: prefix => `> :x: Кого вы хотите софтбанить? Используйте \`${prefix}softban <пользователь> [причина]\``,
  CANT_SOFTBAN_YOURSELF: "> :x: Вы не можете софтбанить самого себя.",
  CANT_SOFTBAN_BOT: "> :x: Вы не можете софтбанить бота.",
  SOFTBAN_SUCCESS: user => `:white_check_mark: ${user} успешно софтбанен.`,
  SOFTBAN_FAILED: ":x: Софтбан не удался",
};
