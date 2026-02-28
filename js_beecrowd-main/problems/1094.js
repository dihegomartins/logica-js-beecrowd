export function problem(lines) {
    let n = Number(lines[0])
    let array = []
    let totalCobaias = 0
    let coelhos = 0
    let ratos = 0
    let sapos = 0
    let porcentagemCoelhos = 0
    let porcentagemRatos = 0
    let porcentagemSapos = 0

    for (let index = 1; index <= n; index++) {
        array = lines[index]
        array = array.split(" ")
        let numero = Number(array[0])
        if(array[1] === `C`){
            coelhos = coelhos + numero
        } else if(array[1] === `R`){
            ratos = ratos + numero
        } else {
            sapos = sapos + numero
        }
        totalCobaias = totalCobaias + numero
    }

    porcentagemCoelhos = (100 * coelhos) / totalCobaias
    porcentagemRatos = (100 * ratos) / totalCobaias
    porcentagemSapos = (100 * sapos) / totalCobaias
    
    console.log(`Total: ${totalCobaias} cobaias\nTotal de coelhos: ${coelhos}\nTotal de ratos: ${ratos}\nTotal de sapos: ${sapos}\nPercentual de coelhos: ${porcentagemCoelhos.toFixed(2)} %\nPercentual de ratos: ${porcentagemRatos.toFixed(2)} %\nPercentual de sapos: ${porcentagemSapos.toFixed(2)} %`)
}