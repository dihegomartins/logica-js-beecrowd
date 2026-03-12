export function problem(lines) {
    let x = Number(lines[0])
    for (let i = 0; i < 10; i++) {
        console.log(`N[${i}] = ${x}`)
        x *= 2 
    }
}