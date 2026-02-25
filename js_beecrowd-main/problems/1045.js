export function problem(lines) {
    let entradas = lines[0].split(" ").map(Number)
    entradas.sort((a, b) => b - a);
    let A = entradas[0]
    let B = entradas[1]
    let C = entradas[2]

    if(A >= (B + C)){
        console.log(`NAO FORMA TRIANGULO`)
    } else {
        if(A * A === B * B + C * C) console.log(`TRIANGULO RETANGULO`)
        if(Math.pow(A, 2) > Math.pow(B, 2) + Math.pow(C, 2)) console.log(`TRIANGULO OBTUSANGULO`)
        if(Math.pow(A, 2) < Math.pow(B, 2) + Math.pow(C, 2)) console.log(`TRIANGULO ACUTANGULO`)
        if(A === B && B === C) console.log(`TRIANGULO EQUILATERO`)
        if((A === B && A !== C) || (B === C && B !== A) || (A === C && A !== B)) console.log(`TRIANGULO ISOSCELES`)
    }
}