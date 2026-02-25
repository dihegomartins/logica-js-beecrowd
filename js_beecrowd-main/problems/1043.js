export function problem(lines) {
    let entradas = lines[0]
    entradas = entradas.split(" ")
    
    let A = Number(entradas[0])
    let B = Number(entradas[1])
    let C = Number(entradas[2])

    if((A + B) > C && (A + C) > B && (B + C) > A){
        let perimetro = A + B + C
        console.log(`Perimetro = ${perimetro.toFixed(1)}`)
    } else {
        let trapezio = ((A + B)*C)/2
        console.log(`Area = ${trapezio.toFixed(1)}`)
    }
}