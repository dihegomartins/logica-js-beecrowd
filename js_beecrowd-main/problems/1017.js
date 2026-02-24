export function problem(lines) {
    const horas = lines[0]
    const velocidadeMedia = lines[1]

    const distanciaTotal = horas * velocidadeMedia
    const quantidadeLitrosTotal = distanciaTotal/12
    
    console.log(quantidadeLitrosTotal.toFixed(3))
}