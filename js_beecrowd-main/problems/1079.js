export function problem(lines) {
    let n = Number(lines[0])
    let array = []

    for (let index = 1; index <= n; index++) {
        array = lines[index]
        array = array.split(" ").map(Number)
        let media = (array[0] * 2 + array[1] * 3 + array[2] * 5) / 10

        console.log(media.toFixed(1))
    }
}