export function problem(lines) {
    let entrada = Number(lines[0])
    let atual = 1

    for (let index = 0; index < entrada; index++) {
        console.log(`${atual} ${atual + 1} ${atual + 2} PUM`);

        atual += 4
    }
}