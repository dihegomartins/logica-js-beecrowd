export function problem(lines) {
    let aux = 0
    let idade = Number(lines[aux++])
    let cont = 0
    let media = 0
    while(idade > 0){
        media += idade
        cont++
        idade = Number(lines[aux++])
    }
    if(cont > 0){
        media = media/cont
    }
    console.log(media.toFixed(2))
}