export function problem(lines) {
    const X = lines[0]
    const Y = lines[1]

    let totalConsumidor = X/Y

    console.log(`${totalConsumidor.toFixed(3)} km/l`)
}