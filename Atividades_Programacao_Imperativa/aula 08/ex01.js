let acompanhada = true
let altura = ""

function podeSubir (altura, acompanhada) {
    let podeSubir = false

    if (altura >= 1.40 && altura <= 2.0) {
        return console.log("Acesso Autorizado")
    }

    else if (altura > 1.20 && altura <= 1.40 && acompanhada) {
        return console.log ("Acesso Autorizado com acompanhante")
    }

    else if (altura < 1.20) {
        return console.log ("Acesso negado")
    }

    else {
       return console.log ("Acesso negado")
    }
}

podeSubir (1.35, acompanhada)

// Equipe: Matheus Ribeiro, Igor Avelar, Filipe Silva, Michel Vieira