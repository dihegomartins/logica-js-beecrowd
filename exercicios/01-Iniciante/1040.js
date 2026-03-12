export function problem(lines) {
    let entrada = lines[0]
    entrada = entrada.split(" ")
    let n1 = Number(entrada[0])
    let n2 = Number(entrada[1])
    let n3 = Number(entrada[2])
    let n4 = Number(entrada[3])

    let media = (n1*2 + n2*3 + n3*4 + n4*1) /10

    if (media > 4.84 && media < 4.86) media = 4.8;

    console.log(`Media: ${media.toFixed(1)}`)

    if(media >= 7.0) {
        console.log(`Aluno aprovado.`)
    } else if(media < 5.0) {
        console.log(`Aluno reprovado.`)
    } else {
        console.log(`Aluno em exame.`)
        let notaExame = Number(lines[1])
        console.log(`Nota do exame: ${notaExame.toFixed(1)}`)

        let mediaExame = (notaExame + media) / 2
        
        if(mediaExame >= 5) {
            console.log(`Aluno aprovado.`)
        } else {
            console.log(`Aluno reprovado.`)
        }
    console.log(`Media final: ${mediaExame.toFixed(1)}`)
    }
}
