export function problem(lines) {
    const veterInvert = lines[0].trim()
    const aveMamifeInseAnelid = lines[1].trim()
    const tipoComida = lines[2].trim()

    if(veterInvert === `vertebrado`){
        if(aveMamifeInseAnelid === `ave`){
            if(tipoComida === `carnivoro`) {
                console.log(`aguia`)
            } else {
                console.log(`pomba`)
            }
        } else {
            if(tipoComida === `onivoro`){
                console.log(`homem`)
            } else {
                console.log(`vaca`)
            }
        }
    }else{
        if(aveMamifeInseAnelid === `inseto`) {
            if(tipoComida === `hematofago`) {
                console.log(`pulga`)
            } else {
                console.log(`lagarta`)
            }
        } else {
            if(tipoComida === `hematofago`) {
                console.log(`sanguessuga`)
            } else {
                console.log(`minhoca`)
            }
        }
    } 
}