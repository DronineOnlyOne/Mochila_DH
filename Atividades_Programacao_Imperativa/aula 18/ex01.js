
//Loop de Pares

console.log(" -------------------------- Loop de Pares ------------------------- ")

function loopDePares(a) {
    for (let i = 0; i <= 100; i++) {
        console.log((a + i) % 2 === 0 ? 'O número ' + i + ' é par' : (a + i));
    }
}

loopDePares(6)

// Loop ímpares com palavra

console.log(" -------------------------- Loop de Impares ------------------------- ")

function loopDeImpares(a) {
    for (let i = 0; i <= 100; i++) {
        console.log((a + i) % 2 === 1 ? 'O número ' + i + ' é impar' : (a + i));
    }
}

loopDeImpares(6)

// Soma 

console.log(" -------------------------- Soma ------------------------- ")

function soma(valor) {
    if (valor > 0) {
        valor = valor + soma(valor - 1)
    }
    return valor
}

console.log(soma(5))

// Novo Array

console.log(" -------------------------- Novo Array ------------------------- ")

function newArray(valor) {
    let array = [];
    for (let i = 1; i <= valor; i++) {
        array.push(i)
    }
    return console.log(valor)
}

function newArray2(valor) {
    let array2 = [];
    for (let i = 1; i <= valor; i++) {
        array2.push(i)
    }
    return console.log(valor)
}

newArray2(10)
newArray(5)

//String split

console.log(" -------------------------- String Split ------------------------- ")

function split(a) {
    let array = [];
    for (let i = 0; i < a.length; i++) {
        array.push(a[i])
    }
    return console.log(array)
}

split("DigitalHouse")

// Zero pro final 

console.log(" -------------------------- Zero pro final ------------------------- ")

const array0 = [0, 0, 0, 0, 0, 0, 1, 2, 3, 4, 5, 6]


function moverZeros(array0) {
    let zeros = []
    let semZeros = []

    array0.filter(element => element == 0 ? zeros.push(element) : semZeros.push(element))
    return semZeros.concat(zeros)
}

console.log(moverZeros(array0))


console.log(" --------------------- Lidando com dois arrays ----------------------- ")


const arrayNumero = [1, 2, 3]
const arrayPalavra = ['O', 'L', 'A']

function arrayHandler(a, b) {

    for (let i = 0; i < a.length || i < b.length; i++) {
        console.log("Eu sou " + a[i] + " e eu sou " + b[i])
    }
}

arrayHandler(arrayNumero, arrayPalavra)


console.log(" --------------------- Arrays de objetos ----------------------- ")

function arrayObjetos(a) {
    objetos = []
    for (let i = 1; i <= a; i++) {
        objetos.push({Valor: i})
    }

    return console.log(objetos)
}

arrayObjetos(5)


console.log(" --------------------- Arrays de objetos 2 ----------------------- ")

function arrayObjetosDois (a,b){
    objetosDois = []
    for (let i = 1; i <= a; i++) {
        objetosDois.push ({[b] : i})
        
    }

    return console.log(objetosDois)
}

arrayObjetosDois (5,"Acabou")