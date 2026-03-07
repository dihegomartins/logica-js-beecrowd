export function problem(lines) {
    let aux = 0
    for (let i = 0; i < 10; i++) {
        let valor = Number(lines[aux++])
        if(valor <= 0){
            valor = 1
        }
        console.log(`X[${i}] = ${valor}`);        
    }
}