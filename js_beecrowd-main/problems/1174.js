export function problem(lines) {
    let aux = 0
    let arrays = []

    for (let i = 0; i < 100; i++) {
        let valor = Number(lines[aux++])
        if(valor <= 10){
            console.log(`A[${i}] = ${valor.toFixed(1)}`)
        }
        arrays.push(valor)
    }
}