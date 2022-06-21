const  grupo = require ("./grupo")
console.log(grupo)

// Altura Maior e Menor do grupo

console.log("------------------ Maior e menor altura do grupo ------------------")
let menorAltura = 100
let maiorAltura = 0

grupo.forEach(function (p) {
    if (p.altura < menorAltura) {
        menorAltura = p.altura
    }
    else if (p.altura > maiorAltura) {
        maiorAltura = p.altura
    }
});

console.log("A menor altura é " + menorAltura.toFixed(2) + " metros")
console.log("A maior altura é " + maiorAltura.toFixed(2) + " metros")

// Quantia de mulheres e a media de altura

console.log("------------------ Quantia de mulheres e a media de altura ------------------")
let mediaF = 0
let qtdm = 0
for (let i = 0; i < grupo.length; i++) {
    if (grupo[i].sexo == "F") {
        qtdm++
        mediaF = grupo[i].altura + mediaF
    }
}
console.log("tem " + qtdm + " de mulheres")
mediaF = mediaF / qtdm
console.log(mediaF.toFixed(2) + " é a altura media feminina")

// Quantia de homens
console.log("------------------ Quantia de homens ------------------")

let quantiaHomem = 0

for (let i = 0; i < grupo.length; i++) {
    if (grupo[i].sexo == "M") {
        quantiaHomem++
    }
}

console.log("tem " + quantiaHomem + " homens")