require('dotenv').config()
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TOKEN)
const M = require("telegraf-markupk94-ts")

bot.hears("/start", ctx => {
    const chatId = ctx.chat.id
    const first_name = ctx.message.from.first_name
    const username = ctx.message.from.username
    ctx.deleteMessage();
    ctx.telegram.sendPhoto(
        chatId,
        { source: './photos/startImg.jpg' },
        {
            caption: `Добро пожаловать 🥳@${username} \nВ боте нет глупых вопросов и скучных заданий 😈\nПриятной игры ♥️ `, reply_markup: {
                inline_keyboard: [
                    [{ text: "Правда", callback_data: "DL" }, { text: "Действия", callback_data: "KK" }],
                    [{ text: "Случайно", callback_data: "LL" }],
                ]
            }
        }
    )
    
    console.log(ctx.chat);
})



bot.launch()