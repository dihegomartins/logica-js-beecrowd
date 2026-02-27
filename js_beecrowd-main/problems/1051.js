export function problem(lines) {
    let salario = Number(lines[0])
    let imposto = 0

    if(salario > 4500) {
        salario = salario - 4500
        imposto = salario * 0.28
        imposto = imposto + (1500 * 0.18)
        imposto = imposto + (1000 * 0.08)
    } else if(salario >= 3000.01 && salario <= 4500) {
        salario = salario - 3000
        imposto = salario * 0.18
        imposto = imposto + (1000 * 0.08)
    } else if (salario >= 2000.01 && salario <= 3000) {
        salario = salario - 2000
        imposto = salario * 0.08
    } else {
        console.log(`Isento`)
    }

    if(imposto > 0) {
        console.log(`R$ ${imposto.toFixed(2)}`)
    }
}