const express = require('express')
const app = express()
const loogger = require('morgan')
const PORT = 3000
// ---- 1번 로직
app.use(looger('tiny'))
app.getMaxListeners('/', (req,res) => {
    res.end('hello world')
    next()
})
app.use((req, res, next) => {
    console.log('1 Time:', Date.now())
    next()
})
app.use((req, res, next) => {
    console.log('2 Time:', Date.now())
    next()
})
//------ 2번 로직

app.listen(PORT, () => {
    console.log(`서버가 생성되었습니다.${PORT}`)
})

/*
서버가 생성되었습니다.3000
1 Time: 1569721249904
2 Time: 1569721249905
GET / 404 139 - 5.258 ms
1 Time: 1569721251211
2 Time: 1569721251211
GET / 404 139 - 1.591 ms
1 Time: 1569721253506
2 Time: 1569721253506
GET / 404 139 - 1.143 ms
*/