require('dotenv').config()
const { Telegraf, Markup } = require("telegraf");
const bot = new Telegraf(process.env.TOKEN)


bot.hears("/start", ctx => {
    const chatId = ctx.chat.id
    const first_name = ctx.message.from.first_name
    const userid = ctx.message.from.id
    const username = ctx.message.from.username
    const user = `[${ctx.message.from.first_name}](tg://user?id=${ctx.message.from.id})`
    ctx.deleteMessage();


    ctx.telegram.sendPhoto(
        chatId,
        { source: './photos/photoStart.png' },
        {
            caption: `Добро пожаловать 🥳 ${user} \nВ боте нет глупых вопросов и скучных заданий 😈\nПриятной игры ♥️ `, reply_markup: {
                inline_keyboard: [
                    [{ text: "🙈 Правда", callback_data: "Truht" }, { text: "🤯 Действия", callback_data: "Dare" }],
                    [{ text: "🖇 Случайно", callback_data: "Random" }],
                    [{ text: "😝 Добавить в группу", url: "https://t.me/Pravda_deystviya_bot?startgroup=new" }],
                ]
            }, parse_mode: 'MarkdownV2'
        }
    )

    console.log(ctx.chat);
})

bot.action("Truht", (ctx) => {
    ctx.deleteMessage();
    ctx.telegram.sendPhoto(
        ctx.chat.id,
        { source: './photos/photoStart.png' },
        {
            caption: 'Как вы назвали вашего первого ребёнка ?!\n(Мальчик,девушка)', reply_markup: {
                inline_keyboard: [
                    [{ text: "🤯 Действия", callback_data: "Dare" }],
                    [{ text: "🔜 Следующий ", callback_data: "nextT" }]
                ]
            }
        }
    )

});
bot.action("Dare", (ctx) => {
    ctx.deleteMessage();

    ctx.telegram.sendPhoto(
        ctx.chat.id,
        { source: './photos/photoStart.png' },
        {
            caption: 'Скажи ЛП/ЛД что ты выиграл 100.000сум.Потом скажи это оказывается не ты.', reply_markup: {
                inline_keyboard: [
                    [{ text: "🙈 Правда", callback_data: "Truht" }],
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
            ctx.chat.id,
            { source: './photos/photoStart.png' },
            {
                caption: 'Как вы назвали вашего первого ребёнка ?!\n(Мальчик,девушка)', reply_markup: {
                    inline_keyboard: [
                        [{ text: "🤯 Действия", callback_data: "Dare" }],
                        [{ text: "🔜 Следующий ", callback_data: "nextT" }]
                    ]
                }
            }
        )

        // ctx.reply('Truht', Markup.inlineKeyboard([Markup.button.callback("Truht")]))
    } else {
        ctx.telegram.sendPhoto(
            ctx.chat.id,
            { source: './photos/photoStart.png' },
            {
                caption: 'Скажи ЛП/ЛД что ты выиграл 100.000сум.Потом скажи это оказывается не ты.', reply_markup: {
                    inline_keyboard: [
                        [{ text: "🙈 Правда", callback_data: "Truht" }],
                        [{ text: "🔜 Следующий", callback_data: "nextD" }]
                    ]
                }
            }
        )

        // ctx.reply('Dare', Markup.inlineKeyboard([Markup.button.callback("Dare")]))
    }
});




bot.launch()