export function problem(lines) {
    let numeroMaior = 0
    let posicaoMaior = 0
    for (let index = 0; index < 100; index++) {
        let numero = Number(lines[index])
        if(numero > numeroMaior) {
            numeroMaior = numero
            posicaoMaior = index + 1
        }
    }
    console.log(`${numeroMaior}\n${posicaoMaior}`)
}