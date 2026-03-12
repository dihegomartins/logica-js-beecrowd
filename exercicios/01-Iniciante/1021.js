export function problem(lines) {
    let entrada = Number(lines[0])

    let valorEmCentavos = Math.round(entrada * 100);

    let cedulas = [10000, 5000, 2000, 1000, 500, 200]
    let moedas = [100, 50, 25, 10, 5, 1]

    console.log(`NOTAS:`)
    for(let cedula of cedulas){
        let quantidadeNotas = Math.floor(valorEmCentavos/cedula)
        valorEmCentavos = valorEmCentavos%cedula

        console.log(`${quantidadeNotas} nota(s) de R$ ${(cedula/100).toFixed(2)}`)
    }

    console.log(`MOEDAS:`)
    for(let moeda of moedas){
        let quantidadeDeMoedas = Math.floor(valorEmCentavos/moeda)
        valorEmCentavos = valorEmCentavos%moeda

        console.log(`${quantidadeDeMoedas} moeda(s) de R$ ${(moeda/100).toFixed(2)}`)
    }
}