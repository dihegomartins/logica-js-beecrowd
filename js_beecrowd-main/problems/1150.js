export function problem(lines) {
    let aux = 0
    let x = Number(lines[aux++])
    let z 

    while (true) {
        z = lines[aux++]
        if(z > x) break
    }
    let somar = 0;
    let contador = 0;
    let atual = x;

    while (somar <= z) {
        somar += atual;
        atual++;    
        contador++; 
    }
    console.log(contador);
}