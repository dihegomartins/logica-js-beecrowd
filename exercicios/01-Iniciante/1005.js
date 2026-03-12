export function problem(lines) {
    const notaA = lines[0]
    const notaB =  lines[1]
    const notaPesoA = Number(notaA) * 3.5
    const notaPesolB = Number(notaB) * 7.5

    const media = (notaPesoA + notaPesolB)/11

    console.log(`MEDIA = ${media.toFixed(5)}`)
}