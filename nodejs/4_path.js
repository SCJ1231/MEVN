const express = require('express')
const app = express()
const port = 3000

app.get('/user/:name/:age/:gender/:address', (req, res) => {
    const params = req.params
    console.log(params)
    res.send("userName:"+params.name+" age:"+params.age+" gender:"+params.gender+ "address:"+params.address)
})

app.listen(port, () => {
    console.log(`Example app listening in port ${port}`)
})