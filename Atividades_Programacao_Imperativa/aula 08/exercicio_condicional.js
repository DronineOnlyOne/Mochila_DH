
// 4. As    maçãs     custam     R$     0,30     cada     se     forem     compradas    menos     do     que     uma
//     dúzia,     e     R$     0,25     se     forem     compradas     pelo     menos     doze.     Escreva     um
//     programa     que     leia     o     número     de     maçãs     compradas,     calcule     e     escreva     o
//     valor    total    da    compra.

// 5. Tendo     como     entrada     a     altura     e     o     sexo     (codificado     da     seguinte     forma:
//     1:feminino          2:masculino)     de     uma     pessoa,     construa     um     programa     que
//     calcule    e    imprima    seu    peso    ideal,    utilizando    as    seguintes
//     Fórmulas:
//     - para    homens:    (72.7    *    Altura)    – 58
//     - para    mulheres:    (62.1    *    Altura)    – 44.7

// 1

function ex01 (valor1, valor2) {
    if (valor1 > valor2) {
        return "o valor 1 é maior que o valor 2!"
    }
    else {
        return "o valor 1 não é maior que o valor 2!"
    }
}

console.log (ex01 (500, 50))

// 2

function ex02 (ano){
    if (ano < 2004){
        return "Ela poderá votar esse ano!"
    }
    else {
        return "Ela não podera votar esse ano!"
    }
}

console.log (ex02 (2002))

// 3
let senha = 1234
function ex03 (senha) {
    if (senha === 1234) {
        return "Acesso Permitido!"
    }
    else {
        return "Acesso Negado!"
    }
}

console.log (ex03 (0000))

// 4

