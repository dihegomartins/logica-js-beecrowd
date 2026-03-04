 export function problem(lines) {
    let [x, y] = lines[0].split(" ").map(Number)
    let linha = ""

    for (let aux = 1; aux <= y; aux++) {
    linha += aux;
        if (aux % x === 0 || aux === y) {
            console.log(linha);
            linha = ""; 
        } else {
            linha += " ";
        }
    }
}