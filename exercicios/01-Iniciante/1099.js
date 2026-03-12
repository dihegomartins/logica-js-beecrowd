export function problem(lines) {
    let n = Number(lines[0])
    
    for (let index = 1; index <= n; index++) {
        let [x, y] = lines[index].split(" ").map(Number); 
        
        let menor = Math.min(x, y);
        let maior = Math.max(x, y);
        let soma = 0;

        for (let i = menor + 1; i < maior; i++) {
            if (i % 2 !== 0) {
                soma += i;
            }
        }
        console.log(soma);
    }
}