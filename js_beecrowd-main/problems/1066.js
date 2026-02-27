export function problem(lines) {
    let pares = 0
    let impar = 0
    let positivos = 0
    let negativos = 0

    for (let index = 0; index < 5; index++) {
        let numero = Number(lines[index])
        
        if (numero % 2 === 0) {
            pares++;
        } else {
            impar++;
        }

        if (numero > 0) {
            positivos++;
        } else if (numero < 0) {
            negativos++;
        }
    }
    console.log(`${pares} valor(es) par(es)\n${impar} valor(es) impar(es)\n${positivos} valor(es) positivo(s)\n${negativos} valor(es) negativo(s)`)
}