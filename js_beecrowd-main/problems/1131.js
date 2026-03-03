export function problem(lines) {
let aux = 0;

function obterOpcaoMenu() {
    let opcao = 0;
    while (opcao !== 1 && opcao !== 2) {
        if (lines[aux] === undefined) return 2; 

        let linhaLida = lines[aux].trim();
        if (linhaLida === "") {
            aux++;
            continue;
        }

        console.log("Novo grenal (1-sim 2-nao)");
        opcao = Number(linhaLida);
        aux++; 
    }
    return opcao;
}

let quantidadGrenais = 0
let vitoriasInter = 0
let vitoriasGremio = 0
let empates = 0
let inter = 0
let gremio = 0


while (aux < lines.length) {
    let linhaGols = lines[aux] ? lines[aux].trim() : "";
    
    if (linhaGols === "") { 
        aux++; 
        continue; 
    }

    let partes = linhaGols.split(" ");
    if (partes.length < 2) {
        break; 
    }

    [inter, gremio] = partes.map(Number);
    
    quantidadGrenais++
    if(inter > gremio ) {
        vitoriasInter++
    } else if(gremio > inter) {
        vitoriasGremio++
    } else {
        empates++
    }

    aux++; 
    let escolha = obterOpcaoMenu();

    if (escolha === 2) break;
}

console.log(quantidadGrenais + " grenais");
console.log("Inter:" + vitoriasInter);
console.log("Gremio:" + vitoriasGremio);
console.log("Empates:" + empates);

    if (vitoriasInter > vitoriasGremio) {
        console.log("Inter venceu mais");
    } else if (vitoriasGremio > vitoriasInter) {
        console.log("Gremio venceu mais");
    } else {
        console.log("Nao houve vencedor");
    }
}