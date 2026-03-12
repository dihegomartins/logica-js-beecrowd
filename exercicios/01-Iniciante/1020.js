export function problem(lines) {
    let entrada = Number(lines[0])

    let ano = Math.floor(entrada / 365)
    let restoDeDias = entrada % 365

    let mes = Math.floor(restoDeDias/30)
    let dias = restoDeDias%30
    console.log(`${ano} ano(s)\n${mes} mes(es)\n${dias} dia(s)`)
}