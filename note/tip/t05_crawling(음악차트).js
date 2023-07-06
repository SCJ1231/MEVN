const axios = require('axios')
const cheerio = require('cheerio')


const url = 
    'https://search.naver.com/search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=%EC%9D%8C%EC%95%85%EC%88%9C%EC%9C%84'

    axios.get(url).then((res) => {
        const $ = cheerio.load(res.data)
        const song = []   //배열생성
        $('.tit_area').each(function(){
            song.push($(this).text()) //배열안에 넣어서 보기 좋게 한다.
        })
        song.forEach((v,i) => {
            console.log(`${i+1}위: ${v}`)
        })
    })