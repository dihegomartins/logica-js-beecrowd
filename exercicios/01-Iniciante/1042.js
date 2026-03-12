export function problem(lines) {
    let entradas = lines[0]
    entradas = entradas.split(" ").map(Number)
    
    let aux = entradas.slice()

    entradas.sort((a, b) => a - b);

    for(let guarda of entradas){
        console.log(guarda)
    }
    console.log("")
    for(let entrada of aux){
        console.log(entrada)
    }
}