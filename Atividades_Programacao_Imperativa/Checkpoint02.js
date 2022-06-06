/*

1. Faça um programa que receba três inteiros e diga qual deles é o maior e qual o menor?

2. Para doar sangue é necessário ter entre 18 e 67 anos. Faça um algoritimo que pergunte a 
idade de uma pessoa e diga se ela pode doar sangue ou não. Use alguns dos operadores lógicos OU (||) e E (&&)

3. Faça um programa que peça um valor e mostre na tela se o valor é positivo ou negativo

4. Faça um programa para a leitura de duas notas de um aluno.  
    A mensagem “Aprovado”, se a média alcançada for maior ou igual a 7;
    A mensagem “Aprovado com Distinção”, se a média for igual a 10;
    A mensagem “Reprovado” se a média for menor de do que 7;

*/

// Ex01 ------------------------------------//---------------------------------------//-------------------------------

function maiormenor (valor1, valor2, valor3) { 

        if (valor1 == valor2 && valor1 !== valor3){
            return "o valor1 "+valor1+" é igual o valor2 "+valor2+", porém, é diferente do valor3 "+valor3
        }
        else if (valor1 == valor3 && valor1 !== valor2){
            return "o valor1 "+valor1+" é igual o valor3 "+valor3+", porém, é diferente do valor2 "+valor2
        }
        else if (valor1 == valor2 && valor3) {
            return "os valores sao iguais"
        }
        else if (valor1 > valor2 &&  valor1 < valor3) {
            return "o valor1 "+valor1+" é maior que o valor2 "+valor2+" mas não é maior que o valor3 "+valor3  
        }
        else if (valor1 > valor3 && valor1 < valor2) {
            return "o valor1 "+valor1+" é maior que o valor3 "+valor3+" mas não é maior que o valor2 "+valor2
        }
        else {
            return "o valor1 "+valor1+" é maior que os demais"
        }
}

console.log (maiormenor(5,1,1))

// Ex02 ------------------------------------//---------------------------------------//-------------------------------

function doadordesangue (idade) {
    
    if (idade >= 18 && idade <= 67) {
        return "Você está apto a se tornar um doador :D"
    }
    else if (idade < 18){
        return "Você ainda é novo demais para doar sangue =("
    }
    else if (idade > 67) {
        return "Já passou da época para você doar sangue D:"
    }
    else if (idade !== 18 || idade !== 67 ) {
        return "Ótimo que você queira doar sangue, mas qual a sua idade?"
    }

    else {
        return "invalido"
    }
}

console.log (doadordesangue (60))

// ex03 ------------------------------------//---------------------------------------//-------------------------------

function MeDeUmValor (valor) {

    let MeDeUmValor= "insira um valor"

    if (valor > 0){
        return "Esse valor é positivo!!"
    }
    else if (valor == 0 ) {
        return "Esse valor é 0"
    }
    else if (valor < 0){
        return "Esse valor é negativo!!"
    }
    else {
        return MeDeUmValor
    }
}

console.log (MeDeUmValor(0))

// Ex04 ------------------------------------//---------------------------------------//-------------------------------

function notafinal (valor){
    if (valor == 10){
        return "UAU! Aluno aprovado com exelencia!!! :D ^^"
    }
    else if (valor >= 7){
        return "Parabéns!!! Aluno aprovado! :D"
    }
    else {
        return "Que pena! Aluno reprovado D:, estude mais na próxima!"
    }
}

console.log (notafinal (10))