export function problem(lines) {
    let entrada = Number(lines[0])

    if(entrada < 0 || entrada > 100){
        console.log(`Fora de intervalo`)
    }else if(entrada >= 0 && entrada <= 25){
        console.log(`Intervalo [0,25]`)
    } else if( entrada > 25 && entrada <= 50) {
        console.log(`Intervalo (25,50]`)
    } else if( entrada > 50 && entrada <= 75) {
        console.log(`Intervalo (50,75]`) 
    } else if(entrada > 75 && entrada <= 100) {
        console.log(`Intervalo (75,100]`)
    } 
}