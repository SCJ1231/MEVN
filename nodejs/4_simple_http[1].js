const http = require('http')
const PORT = 3000
const server = http.createServer((req,res)=>{
    res.setHeader('Content-Type','text/plain;charset=utf-8')
    res.write('첫번째 write')
    res.write('두번째 write')
    res.end('전송 끝1')
    res.end('전송 끝2')
})
server.listen(PORT,()=>{
    console.log(`Server listening on ${PORT}`)
})
