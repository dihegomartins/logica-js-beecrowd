export function problem(lines) {
    let controlador = 0
    let media = 0

    for (let index = 0; index < 6; index++) {
        let numero = Number(lines[index])
        if(numero > 0) {
            controlador++
            media = media + numero
        }        
    }

    media = media / controlador

    console.log(`${controlador} valores positivos\n${media.toFixed(1)}`)
}