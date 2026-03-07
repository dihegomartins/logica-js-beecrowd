export function problem(lines) {
    let aux = 0
    let entrada = Number(lines[aux++])
    let val = 0
    while (val < entrada) {
        let [popA, popB, g1, g2] = lines[aux++].trim().split(/\s+/).map(Number)
        let anos = 0

        while (popA <= popB) {
            let crescimentoA = Math.floor(popA * (g1 / 100));
            let crescimentoB = Math.floor(popB * (g2 / 100));

            popA += crescimentoA
            popB += crescimentoB
            anos++

            if(anos > 100){
                console.log(`Mais de 1 seculo.`)
                break
            } 
        }
        if(anos <= 100){
            console.log(`${anos} anos.`)
        }        
        val++
    }
}