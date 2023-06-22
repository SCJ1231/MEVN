const job1 = () => {
    const b = Math.random()*100
    setTimeout(() => {
        console.log('난 1번이야!',b)
    },b)
}
const job2 = () => {
    const b = Math.random()*100
    setTimeout(() => {
        console.log('난 2번이야!',b)
    },b)
}
const job3 = () => {
    const b = Math.random()*100
    setTimeout(() => {
        console.log('난 3번이야!',b)
    },b)
}

job1()
job2()
job3()

//콘솔은 먼저 결과가 나오는데로 출력한다.