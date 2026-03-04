export function problem(lines) {
    let entrada = Number(lines[0])
    let atual = 1

    for (let index = 0; index < entrada; index++) {
        console.log(`${atual} ${atual**2} ${atual ** 3}`);
        atual += 1
    }
}