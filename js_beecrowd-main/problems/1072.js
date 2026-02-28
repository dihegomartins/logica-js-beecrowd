export function problem(lines) {
    let n = Number(lines[0]); 
    let dentro = 0;
    let fora = 0;

    for (let i = 0; i < n; i++) {
        let x = Number(lines[i + 1]);

        if (x >= 10 && x <= 20) {
            dentro++;
        } else {
            fora++;
        }
    }

    console.log(`${dentro} in`);
    console.log(`${fora} out`);   
}