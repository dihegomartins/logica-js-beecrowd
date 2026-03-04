export function problem(lines) {
    let entrada = Number(lines[0])

    for (let index = 1; index <= entrada; index++) {
        console.log(`${index} ${index**2} ${index ** 3}`);
        console.log(`${index} ${(index**2)+1} ${(index ** 3)+1}`);
    }
}