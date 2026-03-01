export function problem(lines) {
    let x = Number(lines[0])

    if(x > 10 && x < 20) {
        console.log(`IF 1`)
    }
    if (x < 10 || x > 20) {
        console.log(`IF 2`)
    }
    if (!(x === 15)){
        console.log(`IF 3`)
    }
}