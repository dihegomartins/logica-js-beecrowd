export function problem(lines) {
    let ponto1 = lines[0]
    ponto1 = ponto1.split(" ")
    const x1 = ponto1[0]
    const y1 = ponto1[1]
    
    let ponto2 = lines[1]
    ponto2 = ponto2.split(" ")
    const x2 = ponto2[0]
    const y2 = ponto2[1]

    const distanciaDoisPontos = Math.sqrt(Math.pow((x2 -x1), 2) + Math.pow((y2 - y1), 2))

    console.log(distanciaDoisPontos.toFixed(4))
}