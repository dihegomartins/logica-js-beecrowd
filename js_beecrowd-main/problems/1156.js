export function problem(lines) {
    let som = 1
    let denominador = 1
    for(let i = 3; i <= 39; i+=2){
        denominador *= 2
        som += (i/denominador)
    }
    console.log(som.toFixed(2))
}