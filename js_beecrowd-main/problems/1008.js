export function problem(lines) {
    const idFuncionario = lines[0]
    const horasTrabalhadas = lines[1]
    const valorPorHoras = lines[2]

    const salarioReceber = horasTrabalhadas * valorPorHoras

    console.log(`NUMBER = ${idFuncionario}\nSALARY = U$ ${salarioReceber.toFixed(2)}`)
}