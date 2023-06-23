const express = require('express')
const path = require('path')
const multer = require('multer')
const app = express()
const port = 3000

const _path = path.join(__dirname, '/')
app.use('/', express.static(_path))

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, _path)
  },
  filename: function (req, res, cb) {
    // cb(null, file.fieldname + '-' + Date.now())
    cb(null, res.originalname)
  }
})

const upload = multer({ storage }) // 멀터의 옵션에 디스크스토리지 엔진 탑재

app.post('/up', upload.single('ufile'), (req, res) => {
  console.log(req.file)
  res.send(
    `<script>alert('파일 업로드 완료');location.replace('index.html')</script>`
  )
})

app.listen(port, () => {
  console.log(`port는? ${port}`)
})
