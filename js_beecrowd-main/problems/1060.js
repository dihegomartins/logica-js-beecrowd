export function problem(lines) {
    let contPositivos = 0

    for (let index = 0; index < 6; index++) {
        let numero = Number(lines[index])
        if(numero > 0) {
            contPositivos++
        }        
    }

    console.log(`${contPositivos} valores positivos`)
}