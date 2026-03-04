export function problem(lines) {
    let N = Number(lines[0]);
    let fatorial = 1

    for (let i = N; i > 0; i--) {
        fatorial *= i
    }
    console.log(fatorial);
}