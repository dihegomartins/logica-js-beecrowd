export function problem(lines) {
    let valores = lines.join(" ").split(/\s+/).filter(el => el !== "").map(Number);

    let aux = 0
    let A = valores[aux++]
    let N 
    let somar = 0
    while (true) {
        N = valores[aux++]
        if(N > 0) break
    }
    for(let i = 0; i < N; i++){
        somar += A + i
    }
    console.log(somar)
}