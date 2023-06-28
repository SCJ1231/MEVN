const aa = async function () {
    await a()
    await b()
    await c()
}

aa()

const main = async () => {
    await a()
    await b()
    await c()
}

main()