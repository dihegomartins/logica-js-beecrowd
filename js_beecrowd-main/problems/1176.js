export function problem(lines) {
    let aux = 0
    let entrada = Number(lines[aux++])
    let val = 0

function gerarTabelaFibonacci() {
    let fib = [0, 1]; 
    for (let i = 2; i <= 60; i++) {
        fib[i] = fib[i-1] + fib[i-2];
    }
    return fib
}
    let tabelaPronta = gerarTabelaFibonacci()

    while (val < entrada) {
        let x = Number(lines[aux++]);
        console.log(`Fib(${x}) = ${tabelaPronta[x]}`);
        val++;
    }
}