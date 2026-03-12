export function problem(lines) {
    let aux = 0
    let numeroDeCasos = Number(lines[aux++])
    let cont = 0
    while (cont < numeroDeCasos) {
        let valorReal = 0
        let [x, y] = lines[aux++].split(" ").map(Number)
        
        if(x % 2 !== 0) {
            valorReal = x
        } else {
            valorReal = x + 1
        }
        let somar = 0
        for (let i = 0; i < y; i++) {
            somar+=valorReal
            valorReal+=2
        }
        cont++
        console.log(somar)
    }
}