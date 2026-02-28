export function problem(lines) {
    let entrada = Number(lines[0])

    for (let index = 1; index <= 10; index++) {
        console.log(`${index} x ${entrada} = ${index*entrada}`)
    }
}