export function problem(lines) {
    let n = Number(lines[0])
    
    for (let index = 1; index <= n; index++) {
        let [x, y] = lines[index].split(" ").map(Number); 
        
        if (y === 0) {
            console.log(`divisao impossivel`)
        } else {
            const divisao = x / y
            console.log(divisao.toFixed(1));
        }
    }
}