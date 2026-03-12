export function problem(lines) {
    let [x, y] = lines[0].split(" ").map(Number); 
    let aux = 0
    while (x > 0 && y > 0) { 
        let minhasString = ``       
        let somar = 0
        let menor = Math.min(x, y);
        let maior = Math.max(x, y);

        for (let i = menor; i <= maior; i++) {
            minhasString += i + " " 
            somar += Number(i)
        }

    aux++
    if (!lines[aux]) break
    [x, y] = lines[aux].split(" ").map(Number); 
    console.log(`${minhasString}Sum=${somar}`);        
    }
}