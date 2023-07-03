const request = require('request')
const url =
  'http://apis.data.go.kr/6260000/BusanPopulationStaticService/getPopulationInfo?serviceKey=NK%2BUKQ42c4ZG9l2fdlF4AJiSp3bLD06S5V3lD%2FaxIzGSVOJWoErVmposjuP14VKxpYEbM2aCtnqbdm6WvGeT2Q%3D%3D&numOfRows=4&pageNo=1&resultType=json'
request(url, (e, res, body) => {
  const rst = JSON.parse(body)
  const 인구수 = rst.getPopulationInfo.body.items.item
  console.log(인구수)
  const arr = []
  // 40만7천5백명 이상인 데이터만 출력(gugun, totPopCnt, mPopCnt, fPopCnt)
  인구수.forEach((v, i) => {
    if (v.totPopCnt > 407500) {
        arr.push(
          `구군:${v.gugun}, 인구수: ${v.totPopCnt}명, 남성:${v.mPopCnt}명, 여성: ${v.fPopCnt}명`
        )  
    }
  })
  console.log(arr)
})