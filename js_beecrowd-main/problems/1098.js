export function problem() {
    for (let i = 0; i <= 2; i = Number((i + 0.2).toFixed(1))) {
        for (let j = 1 + i; j <= 3+i; j++){
            let iLimpo = Number(i.toFixed(1));
            let jLimpo = Number(j.toFixed(1));
            console.log(`I=${iLimpo} J=${jLimpo}`);
        }
    }
}