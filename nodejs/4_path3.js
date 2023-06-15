const express = require('express')
const app = express()
const port = 3000

app.get('/user', (req, res) => {
    const id = req.query.id
    const arr = ['My life is egg','the Avengers are Back', 'Javascript is good enough' ,'배고파요.', '감사합니다.']
   
    const str =`<body>
    <h3>손창준</h3>
    <a href="/user?id=0">Life</a>
    <a href="/user?id=1">Hero</a>
    <a href="/user?id=2">Javascript</a>
    <a href="/user?id=3">배고파요.</a>
    <a href="/user?id=4">감사합니다.</a>
    <h1>${arr[+id]??'버튼을 눌러주세요.'}</h1>
</body>`
    

res.send(str)
})

app.listen(port, () => {
    console.log(`Example app listening in port ${port}`)
})