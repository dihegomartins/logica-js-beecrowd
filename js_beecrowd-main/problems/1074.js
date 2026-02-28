export function problem(lines) {
    let entrada = Number(lines[0])

    for (let index = 1; index <= entrada; index++) {
        let numero = Number(lines[index])
        let mensagens = ``
        
        if(numero === 0) {
            console.log(`NULL`)
            continue
        } else if (numero !== 0 && numero % 2 === 0) {
            mensagens = `EVEN `
        } else {
            mensagens = `ODD `
        }

        if (numero > 0) {
            mensagens += `POSITIVE`
        } else if (numero < 0) {
            mensagens += `NEGATIVE`
        }
        console.log(mensagens)
    }
}