const request = require('request')
const url =
  'http://apis.data.go.kr/B552584/ArpltnInforInqireSvc/getCtprvnRltmMesureDnsty?serviceKey=NK%2BUKQ42c4ZG9l2fdlF4AJiSp3bLD06S5V3lD%2FaxIzGSVOJWoErVmposjuP14VKxpYEbM2aCtnqbdm6WvGeT2Q%3D%3D&sidoName=%EB%B6%80%EC%82%B0'
request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  console.log(rst)
  const junpo = rst.response.body.items
  junpo.forEach((v, i) => {
    console.log(
      `지역:${v.stationName},오존: ${v.o3Value}, 일산화탄소:${v.coValue},미세먼지: ${v.pm10Value}`
    )
  })
})