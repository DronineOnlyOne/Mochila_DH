
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

function macas (a){
    if (a < 12){
        console.log ("Você comprou "+a+" de maçãs, e o preço será R$"+ (a * 0.30))
    }
    else {
        console.log ("Você comprou "+a+" de maçãs, e o preço será R$"+ (a * 0.25))
    }
}

macas (15)

// 5

function peso (sexo,altura) {
    if (sexo === "F"){
        console.log ("Seu peso ideal por ser mulher é "+ (altura * 62.1 - 44.7 ).toFixed(2)+" Kg")
    }
    else if ( sexo === "M"){
        console.log ("Seu peso ideal por ser homem é "+ (72.7 * altura - 58).toFixed(2) +" Kg")
    }
    else {
        console.log ("insira seu sexo e altura")
    }
}

peso ("M",1.70)