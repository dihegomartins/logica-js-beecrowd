export function problem(lines) {
    let entrada = lines[0]
    entrada = entrada.split(" ")
    let A = Number(entrada[0])
    let B = Number(entrada[1])
    let C = Number(entrada[2])
    let D = Number(entrada[3])


    if(B>C && D > A && (C+D)>(A+B) && C > 0 && D > 0 && (A%2 === 0)) {
        console.log(`Valores aceitos`)
    } else {
        console.log(`Valores nao aceitos`)
    }
}