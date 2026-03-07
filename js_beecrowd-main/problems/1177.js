export function problem(lines) {
    let entrada = Number(lines[0])
    let vetorArmazer = []

    for (let i = 0; i < 1000; i++) {
        let numero = i%entrada
        vetorArmazer.push(numero)
        console.log(`N[${i}] = ${vetorArmazer[i]}`)
    }
}