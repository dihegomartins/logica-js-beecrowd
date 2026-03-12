export function problem(lines) {
    let aux = 0

    function proximoNumero() {
        while (lines[aux] !== undefined && lines[aux].trim() === "") {
            aux++;
        }
        return Number(lines[aux++]);
    }

    let x = proximoNumero()
    let y = proximoNumero()

    let maior = Math.max(x, y)
    let menor = Number(Math.min(x, y))

    for (let index = menor+1; index < maior; index++) {
        if(index % 5 === 2 || index % 5 === 3){
            console.log(index)
        }
    }
}




