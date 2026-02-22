export function problem(lines) {
    let peca1 = lines[0]
    peca1 = peca1.split(' ')


    let peca2 = lines[1]
    peca2 = peca2.split(' ')

    const valorPeca1 = Number(peca1[1]) * Number(peca1[2])
    const valorPeca2 = Number(peca2[1]) * Number(peca2[2])
    const valorTotal = valorPeca1 + valorPeca2
    
    console.log(`VALOR A PAGAR: R$ ${valorTotal.toFixed(2)}`)
}