export function problem(lines) {
    const A = lines[0]
    const B = lines[1]
    const C = lines[2]
    const D = lines[3]

    const produtoDiferenca = (A*B) - (C*D)

    console.log(`DIFERENCA = ${produtoDiferenca}`)
}