export function problem(lines) {
let aux = 0;
function obterOpcaoMenu() {
    let opcao = 0;
    while (opcao !== 1 && opcao !== 2) {
        console.log("novo calculo (1-sim 2-nao)");
        aux++;
        if (lines[aux] === undefined) break;
        opcao = Number(lines[aux]);
    }
    return opcao;
}

let soma = 0;
let cont = 0;
let oneORTwo = true;

while (oneORTwo) {
    if (lines[aux] === undefined) break;
    let x = Number(lines[aux]);

    if (x >= 0 && x <= 10) {
        soma += x;
        cont++;
    } else {
        console.log("nota invalida");
    }

    if (cont === 2) {
        console.log("media = " + (soma / 2).toFixed(2));
        
        let escolha = obterOpcaoMenu();

        if (escolha === 2) {
            oneORTwo = false;
        } else {
            soma = 0;
            cont = 0;
        }
    }
    aux++;
}
}