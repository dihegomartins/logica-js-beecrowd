export function problem(lines) {
    let entrada = Number(lines[0])

    let horas = Math.floor(entrada / 3600)

    let sobrouDasHoras = entrada % 3600
    
    let minutos = Math.floor(sobrouDasHoras / 60)

    let segundos = sobrouDasHoras % 60


    console.log(`${horas}:${minutos}:${segundos}`)
}