const alicia = [23, 69, 32];
const bob = [12, 67, 43];

function encontrarGanhador(a, b) {
    let pontosA = []
    let pontosB = []

    for (let pontos = 0; pontos < a.length && b.length; pontos++) {

        if (a[pontos] > b[pontos]) {
            pontosA++
        }
        else if (a[pontos] < b[pontos]) {
            pontosB++
        }
        else {
        }
    }

    if (pontosA > pontosB) {
        return "Alicia Venceu!"
    }
     else if (pontosA < pontosB) {
        return "Bob Venceu!"
    } 
    else if (pontosA == pontosB) {
        return "Empatou!"
    }
    else {
        return "Partida cancelada! Ambos competidores não marcaram pontos!"
    }
}

console.log(encontrarGanhador(alicia, bob))