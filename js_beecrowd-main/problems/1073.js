export function problem(lines) {
    let numero = Number(lines[0])

    for (let index = 2; index <= numero; index+=2) {
        console.log(`${index}^2 = ${Math.pow(index, 2)}`)        
    }
}