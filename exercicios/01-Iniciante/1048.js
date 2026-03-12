export function problem(lines) {
    let salarioInicial = Number(lines[0])
    let reajusteSalario = 0
    let salarioNovo = 0
    let porcentualTexto = 0

    if(salarioInicial <= 400.00){
        reajusteSalario = salarioInicial * 0.15
        salarioNovo = salarioInicial + reajusteSalario
        porcentualTexto = 15
    } else if(salarioInicial >= 400.01 && salarioInicial <= 800) {
        reajusteSalario = salarioInicial * 0.12
        salarioNovo = salarioInicial + reajusteSalario
        porcentualTexto = 12
    } else if (salarioInicial >= 800.01 && salarioInicial <= 1200.00) {
        reajusteSalario = salarioInicial * 0.10
        salarioNovo = salarioInicial + reajusteSalario
        porcentualTexto = 10
    } else if(salarioInicial >= 1200.01 && salarioInicial <= 2000.00) {
        reajusteSalario = salarioInicial * 0.07
        salarioNovo = salarioInicial + reajusteSalario
        porcentualTexto = 7
    } else if(salarioInicial > 2000.00) {
        reajusteSalario = salarioInicial * 0.04
        salarioNovo = salarioInicial + reajusteSalario
        porcentualTexto = 4
    }

    console.log(`Novo salario: ${salarioNovo.toFixed(2)}\nReajuste ganho: ${reajusteSalario.toFixed(2)}\nEm percentual: ${porcentualTexto} %`)

}