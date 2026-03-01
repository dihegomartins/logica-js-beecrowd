export function problem(lines) {
    let [x, y] = lines[0].split(" ").map(Number); 
    let aux = 0
    while (x !== y) { 
        (x > y) ? console.log(`Decrescente`):console.log(`Crescente`)
    aux++
    if (!lines[aux]) break
    [x, y] = lines[aux].split(" ").map(Number); 
    }
}