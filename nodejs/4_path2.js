const express = require('express')
const app = express()
const port = 3000

app.get('/user/:id', (req, res) => {
    const id = req.params
    console.log(id)
    const arr = ['My life is egg','the Avengers are Back', 'Javascript is good enough']
   
    const str =`<body>
    <a href="/user/0">Life</a>
    <a href="/user/1">Hero</a>
    <a href="/user/2">Javascript</a>
    <h1>${arr[Object.id]??'버튼을 눌러주세요.'}</h1>
</body>`
    

res.send(str)
})

app.listen(port, () => {
    console.log(`Example app listening in port ${port}`)
})