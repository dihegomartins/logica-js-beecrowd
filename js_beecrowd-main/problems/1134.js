export function problem(lines) {
    let aux = 0;
    let alcool = 0;
    let gasolina = 0;
    let diesel = 0;

    function lerProximaOpcao() {
        if (aux >= lines.length) return 4
        
        let linha = lines[aux++]
        return parseInt(linha)
    }

    while (true) {
        let entrada = lerProximaOpcao();

        if (entrada === 1) {
            alcool++;
        } else if (entrada === 2) {
            gasolina++;
        } else if (entrada === 3) {
            diesel++;
        } else if (entrada === 4) {
            break; 
        }
    }

    console.log("MUITO OBRIGADO");
    console.log(`Alcool: ${alcool}`);
    console.log(`Gasolina: ${gasolina}`);
    console.log(`Diesel: ${diesel}`);
}