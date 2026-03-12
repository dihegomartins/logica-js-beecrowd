export function problem(lines) {
    let entrada = Number(lines[0])
    
    if(entrada % 2 === 0){
        entrada++
    }

    for (let index = 0; index < 6; index++) {
        console.log(entrada)
        entrada += 2
    }
}