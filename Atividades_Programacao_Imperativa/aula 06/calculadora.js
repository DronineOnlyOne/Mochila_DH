// Calculadora Grupo 01

function soma (a,b){
    return a + b
}

function sub (a,b) {
    return a - b
}

function mult (a,b){
    return a * b
}

function div (a,b){
    return a / b
}

function quadradoDoNumero (a,b){
    return Math.pow (a,b) 
}

function mediaDeTresNumeros (a,b,c){
    return (a+b+c)/3
}

function calculaPorcentagem (a,b){
    return a * b / 100 
}

function geradorDePorcentagem (a,b){
    return a * 100 / b
}

console.log ("-------------- Teste de Operações / Calculador --------------")


console.log (soma (8,3.5));

console.log (sub (3, 9));

console.log (mult (2.8,5));

console.log (div (0,832));

console.log (div (45,5));

console.log (quadradoDoNumero (4,2));

console.log (mediaDeTresNumeros (3, 6, 6 ))

console.log (calculaPorcentagem(634, 15))

console.log (geradorDePorcentagem (2, 200))


// Matheus Ribeiro, Igor Avelar, Michel Vieira, Laura Freitas, Rafael Varela