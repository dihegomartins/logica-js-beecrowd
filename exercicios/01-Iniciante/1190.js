export function problem(lines) {
    let aux = 0;
    // .trim() evita erros de espaços invisíveis que quebram o código
    let operacao = lines[aux++].trim();
    let soma = 0;
    let matriz = [];

    // Preenchendo a matriz
    for (let i = 0; i < 12; i++) {
        matriz[i] = [];
        for (let j = 0; j < 12; j++) {
            matriz[i][j] = Number(lines[aux++]);
        }
    }

    let cont = 0;
    // Lógica da Área Direita
    for (let i = 0; i < 12; i++) {
        for (let j = 0; j < 12; j++) {
            if (j > i && j > 11 - i) {
                soma += matriz[i][j];
                cont++;
            }
        }
    }

    // Cálculo final
    let resultado = (operacao === 'M') ? (soma / cont) : soma;

    // IMPORTANTE:
    // 1. O console.log mostra no seu terminal verde.
    // 2. O return envia para a sua tela (main.js).
    console.log(resultado.toFixed(1));
    return resultado.toFixed(1); 
}