let acompanhada = true
let altura = ''
function podeSubir (altura, acompanhada) {
    let podeSubir = false

    if (altura >= 1.40 || altura == 2.0) {
        podeSubir = true
        console.log("Acesso Autorizado")
    }
    if (altura > 1.20 || altura == 1.40 && acompanhada) {
        podeSubir = true 
        console.log ("Acesso Autorizado com acompanhante")
    }

    if (altura < 1.20 || acompanhada !== acompanhada) {
        console.log ("Acesso negado")
    }

    return podeSubir
}


console.log (podeSubir (1.15, acompanhada))