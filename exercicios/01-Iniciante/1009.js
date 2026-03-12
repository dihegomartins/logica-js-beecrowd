export function problem(lines) {
    const nomeVendedor = lines[0]
    const salarioFixo = lines[1]
    const vendasBruta = lines[2]

    const bonus = (vendasBruta * 15)/100
    const salarioTotal = Number(salarioFixo) + bonus

    console.log(`TOTAL = R$ ${salarioTotal.toFixed(2)}`)
}