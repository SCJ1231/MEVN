require('dotenv').config()
const TelegramBot = require('node-telegram-bot-api')
const token = process.env.bottk
const bot = new TelegramBot(token, { polling: true })

const axios = require('axios')
const cheerio = require('cheerio')

const url =
  'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9D%8C%EC%95%85%EC%88%9C%EC%9C%84'
  'https://www.melon.com/chart/index.htm'

bot.onText(/^안녕/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = '재희: ?'
  console.log(resp)
  bot.sendMessage(chatId, resp)
})

bot.onText(/^이름/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = '재희: ??'
  console.log(resp)
  bot.sendMessage(chatId, resp)
})

bot.onText(/^잘가/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = '최재희는 돌아온다'
  console.log(resp)
  bot.sendMessage(chatId, resp)
})
bot.onText(/^카리나/, (msg, match) => {
    const chatId = msg.chat.id
    const resp = '카리나 보다 최재희'
    console.log(resp)
    bot.sendMessage(chatId, resp)
  })
bot.onText(/^움짤/, (msg, match) => {
    const chatId = msg.chat.id
    const resp = 
        'https://i.pinimg.com/originals/f5/48/57/f5485797a1df87f4dfc8f226b6c361b2.gif'
    console.log(resp)
    bot.sendAnimation(chatId, resp)
  })
  bot.onText(/^아이유/, (msg, match) => {
    const chatId = msg.chat.id
    const resp = '아이유 보다 최재희'
    console.log(resp)
    bot.sendMessage(chatId, resp)
  })
  bot.onText(/^주인/, (msg, match) => {
    const chatId = msg.chat.id
    const resp = '최재희가 주인이다'
    console.log(resp)
    bot.sendMessage(chatId, resp)
  })
  bot.onText(/^조용/, (msg, match) => {
    const chatId = msg.chat.id
    const resp = '최재희는 돌아온다'
    console.log(resp)
    bot.sendMessage(chatId, resp)
  })
bot.onText(/^박보영/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = 
    'https://i.pinimg.com/564x/1c/fe/10/1cfe10dfdd8533fb7273582b64d4f4e7.jpg'
  console.log(resp)
  bot.sendPhoto(chatId, resp)
})
bot.onText(/^사진/, (msg, match) => {
  const chatId = msg.chat.id
  const resp = 
    'https://i.pinimg.com/236x/89/52/b6/8952b61f460f2f4c5920da058579f4fd.jpg'
  console.log(resp)
  bot.sendPhoto(chatId, resp)
})
bot.onText(/^내놔/, (msg, match) => {
    const chatId = msg.chat.id
    const resp = 
      'https://i.pinimg.com/236x/d0/df/f6/d0dff624f8759a477943af9031c9696b.jpg'
    console.log(resp)
    bot.sendPhoto(chatId, resp)
  })
bot.onText(/^자기/, (msg, match) => {
    const chatId = msg.chat.id
    const resp = 
      'https://i.pinimg.com/236x/13/23/15/13231545f1d2615e44a67351b0da57e2.jpg'
    console.log(resp)
    bot.sendPhoto(chatId, resp)
  })
bot.onText(/^음악차트/, async (msg, match) => {
  const chatId = msg.chat.id
  
  try {
    const res = await axios.get(url)
    const $ = cheerio.load(res.data)
    const song = []

    $('.tit_area').each(function () {
      song.push($(this).text())
    })

    for (let i = 0; i < song.length; i++) {
      await bot.sendMessage(chatId, `${i + 1}위 - ${song[i]}`)
    }

    console.log(song)
  } catch (error) {
    console.error(error)
  }
})
 

bot.on('message', (msg) => {
  const chatId = msg.chat.id;
  console.log(msg)
//   bot.sendMessage(chatId, '뭐라카노?');
});