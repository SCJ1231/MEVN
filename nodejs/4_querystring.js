const express = require('express')
const app = express()
const port = 3000

app.get('/user', (req, res) => {
    let url_name = req.params('name')
    let url_age = req.params('age')+1

    res.send("userName:"+url_name+" age:"+url_age)
})

app.listen(port, () => {
    console.log(`Example app listening in port ${port}`)
})