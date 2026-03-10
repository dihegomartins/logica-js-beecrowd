export function problem(lines) {
    let aux = 0
    let operacao = lines[aux++].trim()
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

    let tam = 12
    let cont = 0
    for (let i = 1; i < 12; i++) {
        for (let j = tam - 1; j < 12; j++) {
            soma += matriz[i][j]
            cont++;
        }
        tam--
    }

    if(operacao === 'M'){
        media = soma/cont
        console.log(`${media.toFixed(1)}`)
    } else {
        console.log(`${soma.toFixed(1)}`)
    }
}