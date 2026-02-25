export function problem(lines) {
    let valorEntrada = Number(lines[0])

    const notas = [100, 50, 20, 10, 5, 2, 1]
    let valorEntradaAtualizado = valorEntrada
    for(let nota of notas){
        let quantidadeNotas = Math.floor(valorEntradaAtualizado / nota)
        valorEntradaAtualizado = valorEntradaAtualizado%nota
        
        console.log(`${quantidadeNotas} nota(s) de R$ ${nota},00`)
    }
}