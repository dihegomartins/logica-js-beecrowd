export function problem(lines) {
    let minhasEntradas = lines[0]
    minhasEntradas = minhasEntradas.split(" ")
    let A = Number(minhasEntradas[0])
    let B = Number(minhasEntradas[1])
    let C = Number(minhasEntradas[2])

    let maiorAB = Math.abs(3)
    let maiorDeTodos = 0

    maiorAB = (A + B + Math.abs((A-B)))/2
    if (maiorAB) {
            maiorDeTodos = (maiorAB + C + Math.abs((maiorAB-C)))/2
    }

    console.log(`${maiorDeTodos}  eh o maior`)
}