const express = require('express')
const app = express()
const port = 3000

/* 쿼리스트링 방식 */
app.get('/search.naver', (req, res) => {
    const equery = req.query.query
    const ewhere = req.query.where
  res.send(`요청하신 쿼리는 ${equery}과 ${ewhere}입니다.`)
  //  ->   /search.naver?where=nexearch&sm=top_hty&fbm=0&ie=utf8&query=bus
})  
/* PATH 방식 */
app.get('/search.daum/:where/:sm/:fbm/:ie/:query', (req, res) => {
    const obj = req.params
    console.log(obj)
  res.send(`요청하신 쿼리는 PATH방식으로 ${obj.where}과 ${obj.query}입니다.`)
  // ->    /search.daum/nexearch/:sm=top_hty/:fbm=0/:ie=utf8/bus
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})