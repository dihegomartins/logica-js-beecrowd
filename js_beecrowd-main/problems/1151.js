export function problem(lines) {
    let x = Number(lines[0]);
    let firbo = "";
    let anterior = 0;
    let atual = 1;

    for (let i = 0; i < x; i++) {
        if (i === 0) {
            firbo += "0";
        } else if (i === 1) {
            firbo += "1";
        } else {
            let proximo = anterior + atual;
            firbo += proximo;
            anterior = atual;
            atual = proximo;
        }

        if (i < x - 1) {
            firbo += " ";
        }
    }
    console.log(firbo);
}