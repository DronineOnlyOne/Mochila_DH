const grupo = require("./grupoespec")

console.log("------------------------------------ Media das Idades -------------------------------------------------")

function idadeMedia(grupo) {
    let soma = 0
    let quantia = 0
    for (let i = 0; i < grupo.length; i++) {
        if (grupo[i].opniao === 3) {
            soma += grupo[i].idade
            quantia++
        }
    }
    return (soma / quantia)
}

console.log("A média da idade de pessoas que responderam ótimo é " + idadeMedia(grupo).toFixed(1))

console.log("----------------------- Quantia de pessoas que responderam regular ------------------------------------")

function pessoasRegular(grupo) {
    let quantidade = 0

    for (let i = 0; i < grupo.length; i++) {
        if (grupo[i].opniao === 1) {
            quantidade++
        }
    }

    return quantidade
}

console.log("A quantia de pessoas que responderam regular foram " + pessoasRegular(grupo))


console.log("----------------------------- Porcentagem que responderam bom -----------------------------------------")

function porcentBom (grupo){
    let quantia = 0 

    for (let i = 0; i < grupo.length; i++) {
        if(grupo[i].opniao === 2){ 
            quantia ++
        }  
    }
    return (quantia / grupo.length) * 100
}

console.log( "A procentagem de pessoas que responderam bom foi "+ porcentBom(grupo).toFixed(1)+ "%")


