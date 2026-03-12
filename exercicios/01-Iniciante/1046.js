export function problem(lines) {
    let entradas = lines[0]
    entradas = entradas.split(" ")
    let A = Number(entradas[0])
    let B = Number(entradas[1])
    let horas = 0
    if(A >= B) {
        horas = (24 - A) + B
        console.log(`O JOGO DUROU ${horas} HORA(S)`)
    } else {
        horas  = B - A
        console.log(`O JOGO DUROU ${horas} HORA(S)`)
    }
}