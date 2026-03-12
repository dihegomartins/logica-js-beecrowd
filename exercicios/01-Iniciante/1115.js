export function problem(lines) {
    let [x, y] = lines[0].split(" ").map(Number); 
    let aux = 0
    while (x !== 0 && y !== 0) { 
        let mensagem = ``
        if(x > 0 && y > 0){
            mensagem = `primeiro`
        } else if(x < 0 && y > 0){
            mensagem = `segundo`
        } else if(x < 0 && y < 0) {
            mensagem = `terceiro`
        } else {
            mensagem = `quarto`
        }
        console.log(mensagem)
        aux++
        if (!lines[aux]) break
        [x, y] = lines[aux].split(" ").map(Number); 
    }
}