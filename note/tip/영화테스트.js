const axios = require('axios')
const cheerio = require('cheerio')


const url = 
    'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%98%81%ED%99%94%EC%88%9C%EC%9C%84'

    axios.get(url).then((res) => {
        const $ = cheerio.load(res.data)
        const song = []   //배열생성
        $('.name').each(function(){
            song.push($(this).text()) //배열안에 넣어서 보기 좋게 한다.
        })
        song.forEach((v,i) => {
            if(i<10){
                console.log(`${i+1}위: ${v}`)
            }
        })
    })