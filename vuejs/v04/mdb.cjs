const mongoose = require('mongoose')
const VSchema = require('./schema.cjs')
const USER = process.env.dbid
const PWD = process.env.dbpw
const HOST = process.env.dbghost
const DB = 'd1'
const mongodbURL = `mongodb://${USER}:${PWD}@${HOST}/${DB}`
console.log(HOST)
mongoose.set('strictQuery', false)
mongoose
    .connect(mongodbURL, { useNewUrlParser: true })
    .then(() => {
        console.log('스키마로드완료!!\nDB 접속완료!!\n')
    })
    .catch((e) => {
        console.error(e)
    })
    module.exports = VSchema
