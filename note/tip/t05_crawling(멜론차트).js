const axios = require('axios')
const cheerio = require('cheerio')


const url = 
    'https://www.melon.com/chart/index.htm'

    axios.get(url).then((res) => {
        const $ = cheerio.load(res.data)
        const song = [] 
        const day = []
        $('.yyyymmdd').each(function(){
            day.push($(this).text())
        })
        $('.wrap_song_info').each(function(){
            song.push($(this).text()) 
        })
        song.forEach((v,i) => {
            if(song < 20){
                console.log(`${i+1}위: ${v}`)
            }
        })
    })