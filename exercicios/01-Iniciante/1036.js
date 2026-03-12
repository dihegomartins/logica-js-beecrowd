export function problem(lines) {
    let entrada = lines[0]
    entrada = entrada.split(" ")

    let A = Number(entrada[0])
    let B = Number(entrada[1])
    let C = Number(entrada[2])
    
    let delta = Math.pow(B, 2) - 4*A*C

    let r1 = 0
    let r2 = 0

    if(A === 0 || delta < 0) {
            console.log(`Impossivel calcular`)
    } else {
        r1 = (-B + Math.sqrt(delta)) / (2*A)
        r2 = (-B - Math.sqrt(delta)) / (2*A)
        console.log(`R1 = ${r1.toFixed(5)}\nR2 = ${r2.toFixed(5)}`)   
    }
}