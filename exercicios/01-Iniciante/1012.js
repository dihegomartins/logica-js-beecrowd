export function problem(lines) {
    let valoresFlut = lines[0]
    valoresFlut = valoresFlut.split(" ")
    const A = Number(valoresFlut[0])
    const B = Number(valoresFlut[1])
    const C = Number(valoresFlut[2])
    const pi = 3.14159;

    const areaTrianguloRetangular = (A*C) / 2
    const areaDoCirculo = pi * Math.pow(C, 2)
    const areaDoTrapezio = ((A + B) * C)/2
    const areaDoQuadrado = Math.pow(B, 2)
    const areaDoRetangulo = A * B

    console.log(`TRIANGULO: ${areaTrianguloRetangular.toFixed(3)}`)
    console.log(`CIRCULO: ${areaDoCirculo.toFixed(3)}`)
    console.log(`TRAPEZIO: ${areaDoTrapezio.toFixed(3)}`)
    console.log(`QUADRADO: ${areaDoQuadrado.toFixed(3)}`)
    console.log(`RETANGULO: ${areaDoRetangulo.toFixed(3)}`)

}