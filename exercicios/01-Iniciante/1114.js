export function problem(lines) {
    let [x] = lines[0].split(" ").map(Number); 
    let aux = 0
    const key = 2002
    while (x !== key) {
        console.log(`Senha Invalida`)
    aux++
    if (!lines[aux]) break
    [x] = lines[aux].split(" ").map(Number); 
    }

    if(x === key) console.log(`Acesso Permitido`)
}