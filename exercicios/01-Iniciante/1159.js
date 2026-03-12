export function problem(lines) {
    let aux = 0
    let x = Number(lines[aux++])

    while (x !== 0) {
        let valorReal = 0
        
        if(x % 2 === 0) {
            valorReal = x
        } else {
            valorReal = x + 1
        }
        let somar = 0
        for (let i = 0; i < 5; i++) {
            somar+=valorReal
            valorReal+=2
        }
        x = Number(lines[aux++])
        console.log(somar)
    }
}