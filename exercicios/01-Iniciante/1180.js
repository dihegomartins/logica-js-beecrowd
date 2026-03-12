export function problem(lines) {
    let casosTeste = Number(lines[0])
    let x = lines[1].split(" ").map(Number)
    let menor = x[0]
    let posicao = 0

    for (let i = 1; i < casosTeste; i++) {
        if(x[i] < menor){
            menor = x[i]
            posicao = i
        }
    }
    console.log(`Menor valor: ${menor}\nPosicao: ${posicao}`)
}