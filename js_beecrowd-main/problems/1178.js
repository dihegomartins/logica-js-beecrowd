export function problem(lines) {
    let numero = Number(lines[0])
    let armazem = []
    armazem.push(numero)
    for (let i = 1; i <= 99; i++) {
        let metade = armazem[i-1]/2
        armazem.push(metade)
    }

    let formatador = new Intl.NumberFormat('en-US', { 
        minimumFractionDigits: 4, 
        maximumFractionDigits: 4, 
        useGrouping: false 
    });

    for (let i = 0; i < armazem.length; i++) {
        console.log(`N[${i}] = ${formatador.format(armazem[i])}`)        
    }
}