function alerta() {
    alert("Vamos jogar pedra,papel ou tesoura!");
}

function user() {
    alerta()

    let opcao = prompt("Escolha")

    switch (opcao) {
        case "pedra":
            return 1
        case "papel":
            return 2
        case "tesoura":
            return 3
    }
}

function machine(max, min) {
    return parseInt(Math.random() * (max - min) + min)
}


let empate = 0
let usuariopnts = 0
let machinepnts = 0
let vencedor = ""

do {
    const usuario = user()
    const maquina = machine(1, 3)

    if (usuario === maquina) {
        empate++
    }
    else if (usuario - maquina == 2 || usuario - maquina == 1) {
        usuariopnts++
    }
    else {
        machinepnts++
    }

    if (usuariopnts == 2 && machinepnts < 2) {
        vencedor = "user"
    }
    else if (machinepnts == 2 && usuariopnts < 2) {
        vencedor = "machine"
    }
    else if (machinepnts == 2 || usuariopnts == 2 ) {
        break
    }

    alert ("Placar: " + usuariopnts+ "X" + machinepnts)
} while (vencedor === "")

alert(vencedor+" Wins")
console.log(vencedor+" Wins")

