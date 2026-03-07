export function problem(lines) {
    let aux = 0
    let array = []
    let cont = 19
    
    for (let i = 0; i < 20; i++) {
        let numero = Number(lines[aux++])
        array.push(numero)
    }

    for (let i = 0; i < 10; i++, cont--) {
        let mudar = array[i]
        array[i] = array[cont]
        array[cont] = mudar
    }

    for (let i = 0; i < array.length; i++) {
        console.log(`N[${i}] = ${array[i]}`)           
    }

}