export function problem(lines) {
    let aux = 0
    let entrada = Number(lines[aux++])
    let val = 0;

    while(val < entrada){
        let x = Number(lines[aux++])
        let metade = Math.floor(Math.sqrt(x))
        let ehPrimo = true
        if (x < 2) ehPrimo = false
        
        for (let i = 2; i <= metade; i++) {
            if(x % i === 0){
                ehPrimo = false
            }          
        }
        if(ehPrimo){
            console.log(`${x} eh primo`)
        } else {
            console.log(`${x} nao eh primo`)
        }
        val++
    }
}