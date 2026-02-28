export function problem(lines) {
    let x = Number(lines[0])
    let y = Number(lines[1])
    let maior = Math.max(x, y)
    let menor = Math.min(x, y)
    let soma = 0
    
    for (let index = menor+1; index < maior; index++) {
        
        if(index % 2 !== 0) {
            soma += index
        }
    }
    console.log(soma)
}