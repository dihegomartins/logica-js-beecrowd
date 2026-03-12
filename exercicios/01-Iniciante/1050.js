export function problem(lines) {
    let ddd = Number(lines[0])

    const tabelaDDD = {
        61: `Brasilia`,
        71: `Salvador`,
        11: `Sao Paulo`,
        21: `Rio de Janeiro`,
        32: `Juiz de Fora`,
        19: `Campinas`,
        27: `Vitoria`,
        31: `Belo Horizonte`
    }

    let cidade = tabelaDDD[ddd]

    if(cidade) {
        console.log(cidade)
    } else {
        console.log(`DDD nao cadastrado`)
    }

}