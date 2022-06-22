
//Loop de Pares

console.log (" -------------------------- Loop de Pares ------------------------- ")

function loopDePares (a) {
    for (let i = 0; i <= 100; i++) {
        console.log((a + i) % 2 === 0 ? 'O número '+ i +' é par' : (a + i)); 
    }
}

loopDePares (6) 

// Loop ímpares com palavra

console.log (" -------------------------- Loop de Impares ------------------------- ")

function loopDeImpares (a) {
    for (let i = 0; i <= 100; i++) {
        console.log((a + i) % 2 === 1 ? 'O número '+ i +' é impar' : (a + i)); 
    }
}

loopDeImpares (6) 

// Soma 

console.log (" -------------------------- Soma ------------------------- ")

function soma (valor) {
    if (valor > 0) {
    valor = valor + soma(valor - 1)
    }
    return valor
}

console.log (soma(5))

// Novo Array
 
console.log (" -------------------------- Novo Array ------------------------- ")

function newArray (valor) {
    let array = [];
    for (let i = 1; i <= valor; i++) {
        array.push(i)
    }
    return console.log(valor)
}

function newArray2 (valor) {
    let array2 = [];
    for (let i = 1; i <= valor; i++) {
        array2.push(i)
    }
    return console.log(valor)
}

newArray2(10)
newArray(5)

//String split

console.log (" -------------------------- String Split ------------------------- ")

function split (a) {
    let array = [];
    for (let i = 0; i < a.length; i++) {
        array.push(a[i])
    }
    return console.log(array)
}

split("DigitalHouse")

// Zero pro final 

console.log (" -------------------------- Zero pro final ------------------------- ")

function moverZeros(a){
    array: [0,0,0,0,0,0,0,1,3,4,5,6]
    
}