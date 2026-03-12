export function problem(lines) {
    let aux = 0
    let linhaOp = Number(lines[aux++])
    let operacao = (lines[aux++])
    let soma = 0
    let media = 0
    let matriz = []

    for (let i = 0; i < 12; i++) {
        matriz[i] = [];

        for (let j = 0; j < 12; j++) {
            let x = Number(lines[aux++])
            matriz[i][j] = x
        }
    }

    for (let i = 0; i < 12; i++) {
        soma += matriz[linhaOp][i]
    }

    if(operacao === 'M'){
        media = soma/12
        console.log(`${media.toFixed(1)}`)
    } else {
        console.log(`${soma.toFixed(1)}`)
    }
}