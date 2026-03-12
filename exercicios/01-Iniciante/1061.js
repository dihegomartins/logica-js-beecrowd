export function problem(lines) {
    let diaInicio = lines[0]
    diaInicio = diaInicio.split(" ")
    diaInicio = Number(diaInicio[1])
    let horasInicio = lines[1]
    horasInicio = horasInicio.split(" : ").map(Number)
    
    let dataFim = lines[2]
    dataFim = dataFim.split(" ")
    dataFim = Number(dataFim[1])
    let horasFim = lines[3]
    horasFim = horasFim.split(" : ").map(Number)
    
    let totalInício = (diaInicio * 86400) + (horasInicio[0] *  3600) + (horasInicio[1] * 60) + horasInicio[2]
    let totalFim = (dataFim * 86400) + (horasFim[0] *  3600) + (horasFim[1] * 60) + horasFim[2]
    let diferencaTotal = 0

    diferencaTotal = totalFim - totalInício

    let dias = Math.floor(diferencaTotal / 86400);
    let restoDias = diferencaTotal % 86400;

    let horas = Math.floor(restoDias / 3600);
    let restoHoras = restoDias % 3600; 

    let minutos = Math.floor(restoHoras / 60);
    let segundos = restoHoras % 60; 
    
    console.log(`${dias} dia(s)\n${horas} hora(s)\n${minutos} minuto(s)\n${segundos} segundo(s)`)
}
