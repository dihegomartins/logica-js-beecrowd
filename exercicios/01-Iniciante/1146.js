export function problem(lines) {
    let aux = 0
    let entrada = Number(lines[aux++])
    let linha = ""

    while(true){
        if (entrada === 0 || isNaN(entrada)) break;
        for(let i = 1; i <= entrada; i++){
        linha += i;
            if (i === entrada) {
                console.log(linha);
                linha = ""; 
            } else {
                linha += " ";
            } 
        }
        entrada = Number(lines[aux++])
    }
}