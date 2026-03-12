export function problem(lines) {
    let N = Number(lines[0])
    for (let i = 1; i <= N; i++) {
        if(N % i === 0){
            console.log(i)
        }
    }
}