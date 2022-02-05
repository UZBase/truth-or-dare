require('dotenv').config()
const { Telegraf } = require("telegraf");
const bot = new Telegraf(process.env.TOKEN)

bot.hears("/start",ctx =>{
    const num = Math.floor(Math.random()*2)
    ctx.reply(num === 0 ? "Правда": "Действия")
})

bot.launch()