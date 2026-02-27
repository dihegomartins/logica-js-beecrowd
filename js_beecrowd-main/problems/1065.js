export function problem(lines) {
    let pares = 0

    for (let index = 0; index < 5; index++) {
        let numero = Number(lines[index])
        if(numero % 2  === 0) {
            pares++
        }        
    }

    console.log(`${pares} valores pares`)
}