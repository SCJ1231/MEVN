const mongoose = require('mongoose')
const Schema = mongoose.Schema
const sensorSchema = new Schema({
    cnt: Number,
    id: Number,
        time: Date,
        temp: Number,
        wv: Number,
        humi: Number
})

module.exports = mongoose.model('Sensor', sensorSchema)

const csvFilePath = './data/sensor.csv'
const csv         = require('csvtojson') 
const path        = require('path')
const _path       = path.json(__dirname, csvFilePath)
const Sensor = require('./models/sensor.js')

const main = async()=>{
    const sensorList = await csv().fromFile(_path)
    console.log(sensorList)
    Sensor.insertMany(sensorList, function(error, docs) {
        console.log('데이터 삽입완료')
    })
}

main()