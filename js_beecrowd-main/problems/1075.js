export function problem(lines) {
    let entrada = Number(lines[0])

    for (let index = 1; index <= 10000; index++) {
        if(index%entrada === 2) console.log(index)
    }
}