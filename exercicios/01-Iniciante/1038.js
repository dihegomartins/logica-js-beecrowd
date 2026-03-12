export function problem(lines) {
    let entrada = lines[0]
    entrada = entrada.split(" ")
    let codigoProduto = Number(entrada[0])
    let quantidadeProduto = Number(entrada[1])
    let totalCompra = 0

    switch (codigoProduto) {
        case 1:
            totalCompra = 4.00 * quantidadeProduto
            break;
        case 2:
            totalCompra = 4.50 * quantidadeProduto
            break;
        case 3:
            totalCompra = 5.00 * quantidadeProduto
            break;
        case 4:
            totalCompra = 2.00 * quantidadeProduto
            break;
        case 5:
            totalCompra = 1.50 * quantidadeProduto
            break;
        default:
            break;
    }
    console.log(`Total: R$ ${totalCompra.toFixed(2)}`)        
}