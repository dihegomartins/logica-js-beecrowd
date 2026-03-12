export function problem(lines) {
    let entradas = lines[0].split(" ").map(Number);
    let h1 = entradas[0], m1 = entradas[1], h2 = entradas[2], m2 = entradas[3];

    let inicioTotal = (h1 * 60) + m1;
    let fimTotal = (h2 * 60) + m2;

    let diferenca = fimTotal - inicioTotal;

    if (diferenca <= 0) {
        diferenca += 1440;
    }

    let horasTotal = Math.floor(diferenca / 60);
    let minutosTotal = diferenca % 60;

    console.log(`O JOGO DUROU ${horasTotal} HORA(S) E ${minutosTotal} MINUTO(S)`);
}