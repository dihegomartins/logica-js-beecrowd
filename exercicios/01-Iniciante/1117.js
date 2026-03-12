export function problem(lines) {
    let [x] = lines[0].split(" ").map(Number); 
    let aux = 0
    let cont = 0
    let media = 0
    let soma = 0
    while(cont !== 2){
        if (x < 0 || x > 10) {
            console.log(`nota invalida`)
        } else {
            soma += x
            cont++
        }
        aux++
        if (!lines[aux]) break
        [x] = lines[aux].split(" ").map(Number); 
    }
    media = soma / 2
    console.log(`media = ${media.toFixed(2)}`)
}