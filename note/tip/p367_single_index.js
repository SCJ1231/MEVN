const mongoose = require('mongoose')
const Photo = require('./models/photo.js') //인데스 전
//const Photo = require('./models/photh_index.js') //인덱스후
mongoose.set('useCreateIndex, ture')
//Set up default mongoose connection
const mongoDB = 'mongodb://127.0.01/my_database'
const main = async()=>{
    await mongoose.connect(mongoDB, {useUnifideTopology: true,
useNewUrlParser: true })
.then(() => console.log('connection succesful'))
.catch((err) => console.error(err))
console.time('id를 오름차순으로 찾기')
const ret = await Photo.find().sort({"id" : 1}).limit(100)
console.timeEnd('id를 오름차순으로 찾기')
}
main()
/*
connection succesful
id를 내림차순으로 찾기: 54.193ms
connection succesful
id를 오름차순으로 찾기: 67.147ms
*/