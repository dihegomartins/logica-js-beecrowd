export function problem(lines) {
    let aux = 0
    let entrada = Number(lines[aux++])
    let val = 0
    while (val < entrada) {
        let x = Number(lines[aux++])
        let som = 0
        let metade = Math.floor(x/2)
        
        for (let i = 1; i <= metade; i++) {
            if(x % i === 0) {
                som += i
            }
        }
        if( som === x) {
            console.log(`${x} eh perfeito`)
        } else {
            console.log(`${x} nao eh perfeito`)
        }
        val++
    }
}