export function problem(lines) {
    const R = lines[0]

    const formula =  (4/3.0) * 3.14159 * Math.pow(R, 3)
    console.log(`VOLUME = ${formula.toFixed(3)}`)
}