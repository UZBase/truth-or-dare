require('dotenv').config()
const { Telegraf, Markup } = require("telegraf");
const bot = new Telegraf(process.env.TOKEN)

const QuestionD = [
    "Расскажите алфавит в обратном порядке.",
    "Спойте вашу любимую музыку.(записать в аудио сообщ.)",
    "Станцуйте танец на видео.",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    "",
    ""
]
const QuestionT = [
    "Как вы назвали вашего первого ребёнка ?!\n(Мальчик,девушка)",
    "Имя твоего парня / девушки?",
    "Самое пошлое которого слово ты знаешь.",
    "Ты когда-нибудь читал(а) чужие сообщения?",
    "Ты фотошопишь свои фотографии?",
    "Кого из игроков ты мог(ла) бы поцеловать?",
    "Сколько ты весишь?",
    "За что тебе последний раз было стыдно?",
    "Кому ты завидуешь?",
    "У тебя есть тайный аккаунт в Инстаграме? Рассекреть его!",
    "Ты когда-нибудь нарушал(а) закон?",
    "Была любовь с первого взгляда?",
    "Какую самую большую сумму денег ты держал(а) в руках?",
    "Кем ты хочешь стать?",
    "Сколько раз влюблялась(лся)?",
    "Сколько парней/девушек было?",
    "Тебя когда-нибудь бросали?",
    "Если у тебя когда-нибудь появится шанс поцеловать знаменитость, кто бы это был?",
    "Когда-нибудь убегал со свидания по выдуманной причине?",
    "Назови одну вещь, которую ты хочешь изменить в себе.",
    "Ты когда-нибудь хотел(а) изменить свой пол?",
    "Целовалась/целовался с представителями своего пола?А противого пола ?",
    "Ты когда-нибудь ухаживал(а) за двумя людьми одновременно?",
    "Кому ты последний раз соврал(а) и о чем?",
    "Когда-нибудь лгал(а) в этой игре?",
    "Если бы обладала магической силой, то какой?",
    "Расскажи о самом неловком или позорном моменте в жизни!",
    "Если бы у тебя появился шанс вернуться в прошлое, что бы ты изменила?",
    "Какие мужчины и женщины нравятся? Кто из игроков больше всего похож на идеал?",
    "За что до сих пор стыдно?",
    "О чем обычно врешь другим людям?",
    "Как бы ты потратил (потратила) миллион долларов?",
    "Тебе осталось жить только сутки. Что будешь делать?",
    "Возвращался (возвращалась) к бывшим?",
    "Ты изменял (изменяла) в отношениях? А тебе?",
    "Кто тебя больше всего бесит из присутствующих в комнате?",
    "Кому из игроков «Правда или действия» завидуешь?",
    "Кем и где видишь себя через 10 лет?",
    "Можешь простить измену или сам (сама) изменить?",
    "Что больше всего боишься потерять?",
    "Что готов (готова) сделать за 1 миллион долларов? Переспать, сменить пол, убить?",
    "Какой лучший способ соблазнить тебя?",
    "Что делает тебя добрым (доброй) и что злой?",
    "Следишь ли в социальных сетях за бывшими?",
    "Как бы ты делал (делала) первый шаг в отношениях?",
    "О чем больше всего сожалеешь в жизни?",
    "Какая музыка тебе больше всего нравится?",
    "Кому пишешь чаще всего?",
    "В какой сфере знаменитым хочешь быть?",
    "Вы когда-нибудь за кем-нибудь шпионили?",
    "Вы когда-нибудь говорили с собой вслух?",
    "В чем ваш скрытый талант?",
    "Кто твой любимый человек и почему?",
    "Вы когда-нибудь пропускали занятия?",
    "У кого из ваших знакомых самые красивые глаза?",
    "Хотели изменить свет своих глаз?",
    "Назови последнее, что ты искал(а) в Google.",
    "Девушка / парень твоей мечты?",
    "Ты когда-нибудь хотел(а) кого-то убить?"

]


bot.hears(/\/start|start|Го п или д|\/start@Pravda_deyatviya_bot/g, (ctx) => {
    const chatId = ctx.chat.id
    const first_name = ctx.message.from.first_name
    const userid = ctx.message.from.id
    const username = ctx.message.from.username
    const user = `[${ctx.message.from.first_name}](tg://user?id=${ctx.message.from.id})`
    ctx.deleteMessage();
    ctx.telegram.sendPhoto(
        chatId, { source: './photos/photoStart.png' }, {
            caption: `Добро пожаловать 🥳 ${user} \nВ боте нет глупых вопросов и скучных заданий 😈\nПриятной игры ♥️ `,
            reply_markup: {
                inline_keyboard: [
                    [{ text: "🙈 Правда", callback_data: "Truht" }, { text: "🤯 Действия", callback_data: "Dare" }],
                    [{ text: "🖇 Случайно", callback_data: "Random" }],
                    [{ text: "😝 Добавить в группу", url: "https://t.me/Pravda_deystviya_bot?startgroup=new" }],
                ]
            },
            parse_mode: 'MarkdownV2'
        }
    )
})
bot.action("Truht", (ctx) => {
    ctx.deleteMessage();
    ctx.telegram.sendPhoto(
        ctx.chat.id, { source: './photos/photoStart.png' }, {
            caption: QuestionT[0],
            reply_markup: {
                inline_keyboard: [
                    [{ text: "🤯 Действия", callback_data: "Dare" }],
                    [{ text: "🔝 Главное", callback_data: "/start" }],
                    [{
                        text: "🔜 Следующий ",
                        callback_data: "nextT:1"
                    }]
                ]
            }
        }
    )
});
bot.action(/^ nextT: (\d + ) $ /, async(ctx) => {
    await ctx.answerCbQuery();
    const element = +ctx.match[0].split(':')[1];
    const nextElement = element + 1

    if (nextElement > arr.length) {
        return ctx.telegram.sendMessage(ctx.chat.id, "Увы!Но вопросы закончились( \nНапишите : @Senior_developper")
    }
    return ctx.telegram.sendPhoto(
        ctx.chat.id, { source: './photos/photoStart.png' }, {
            caption: QuestionT[element],
            reply_markup: {
                inline_keyboard: [
                    [{ text: "🤯 Действия", callback_data: "Dare" }],
                    [{ text: "🔝 Главное", callback_data: "/start" }],
                    [{
                        text: "🔜 Следующий ",
                        callback_data: `nextT:${nextElement}`
                    }]
                ]
            }
        }
    )
})

bot.action("Dare", (ctx) => {
    ctx.deleteMessage();

    ctx.telegram.sendPhoto(
        ctx.chat.id, { source: './photos/photoStart.png' }, {
            caption: 'Скажи ЛП/ЛД что ты выиграл 100.000сум.Потом скажи это оказывается не ты.',
            reply_markup: {
                inline_keyboard: [
                    [{ text: "🙈 Правда", callback_data: "Truht" }],
                    [{ text: "🔝 Главное", callback_data: "/start" }],
                    [{ text: "🔜 Следующий", callback_data: "nextD" }]
                ]
            }
        }
    )
});
bot.action("Random", (ctx) => {
    ctx.deleteMessage();

    const num = Math.floor(Math.random() * 2)
    if (num === 0) {
        ctx.telegram.sendPhoto(
            ctx.chat.id, { source: './photos/photoStart.png' }, {
                caption: 'Как вы назвали вашего первого ребёнка ?!\n(Мальчик,девушка)',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "🤯 Действия", callback_data: "Dare" }],
                        [{ text: "🔝 Главное", callback_data: "/start" }],
                        [{ text: "🔜 Следующий ", callback_data: "nextT:1" }]
                    ]
                }
            }
        )

        // ctx.reply('Truht', Markup.inlineKeyboard([Markup.button.callback("Truht")]))
    } else {
        ctx.telegram.sendPhoto(
            ctx.chat.id, { source: './photos/photoStart.png' }, {
                caption: 'Скажи ЛП/ЛД что ты выиграл 100.000сум.Потом скажи это оказывается не ты.',
                reply_markup: {
                    inline_keyboard: [
                        [{ text: "🙈 Правда", callback_data: "Truht" }],
                        [{ text: "🔝 Главное", callback_data: "/start" }],
                        [{ text: "🔜 Следующий", callback_data: "nextD" }]
                    ]
                }
            }
        )
    }
});



bot.launch()