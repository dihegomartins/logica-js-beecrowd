export function problem(lines) {
    let som = 0

    for(let i = 1; i <= 100; i++){
        som = som + (1/i)
    }
    console.log(som.toFixed(2))
}