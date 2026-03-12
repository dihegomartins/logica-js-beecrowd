export function problem(lines) {
    let entradas = lines[0]
    entradas = entradas.split(" ")
    let A = Number(entradas[0])
    let B = Number(entradas[1])

    if(A % B === 0 || B % A === 0){
        console.log(`Sao Multiplos`)
    } else {
        console.log(`Nao sao Multiplos`)
    }
}