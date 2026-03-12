export function problem(lines) {
    let aux = 0
    let x = 0
    let vetorImpar = []
    let vetPar = []

    for (let i = 0; i < 15; i++) {
        x = Number(lines[aux++])
        if(x % 2 === 0){
            vetPar.push(x)
        } else {
            vetorImpar.push(x)
        }

        if(vetPar.length === 5) {
            for (let j = 0; j < 5; j++) {
                console.log(`par[${j}] = ${vetPar[j]}`)                
            }
            vetPar = []
        } else if(vetorImpar.length === 5){
            for (let k = 0; k < 5; k++) {
                console.log(`impar[${k}] = ${vetorImpar[k]}`)                
            }
            vetorImpar = []
        }

    }
    for (let i = 0; i < vetorImpar.length; i++) {
        console.log(`impar[${i}] = ${vetorImpar[i]}`);        
    }
    for (let j = 0; j < vetPar.length; j++) {
        console.log(`par[${j}] = ${vetPar[j]}`);        
    }

}