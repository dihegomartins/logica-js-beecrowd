export function problem(lines) {
    const notaA = lines[0]
    const notaB =  lines[1]
    const notaC = lines[2]
    const notaPesoA = Number(notaA) * 2
    const notaPesolB = Number(notaB) * 3
    const notaPesoC = Number(notaC) * 5
    const media = (notaPesoA + notaPesolB + notaPesoC)/10

    console.log(`MEDIA = ${media.toFixed(1)}`)
}