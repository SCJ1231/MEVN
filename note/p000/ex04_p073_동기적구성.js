const job1 = () => {
    const b = Math.random()*100
    setTimeout(() => {
        console.log('난 1번이야!',b)
        job2()
    },b)
}
const job2 = () => {
    const b = Math.random()*100
    setTimeout(() => {
        console.log('난 2번이야!',b)
        job3()
    },b)
}
const job3 = () => {
    const b = Math.random()*100
    setTimeout(() => {
        console.log('난 3번이야!',b)
    },b)
}

job1()

// 콘솔을 제어해서 나오는 콘솔의 결과 시간을 정할수잇다.