//1
let numeros= [10, 8, 7, 99, 0, 1, 6]
 //numeros.sort(function(a,b){ return console.log(a-b)});
// numeros.sort(function(a,b){ return console.log(a*b)});
 //numeros.sort(function(a,b){ return console.log(b-a)});
// numeros.sort(function(a,b){ return console.log( a,b)});
// numeros.sort(function(a,b){ console.log(a-b);});

//2
// var z=0
// for (var i=20; i<50; i+=10){
//     z+=i
// }
// console.log(z)

//3

// let x=5
// let y = x++ + ++x

// console.log("y= " +y)

// x = 3
// y = x* (x + 1)* x++
// x=5
// y=3
// y*= x+1

// console.log ("x= " +x)
// console.log ("y= "+y)

//4

// let frutasAmarelas=['Melão','Mamão','Limão']
// let [fruta1, fruta2, fruta3] = frutasAmarelas

// console.log(fruta1)
// console.log(fruta2)
// console.log(fruta3)
// console.log(frutasAmarelas)


//5

// function calculo (a,b) {
//     return (a % b)
// }

// console.log ( calculo(100,100))

//6

// for (var i=0; i<50; i+=10){
//     console.log(i)
// }

// console.log(i),

//7

// let valor = 5
// let favorial = 1
// for (let i = valor; i > 1; i--) {
//     fatorial=i
// }

// console.log ("Fatorial = "+fatorial)

function soletrar (texto){
    console.log (texto.replace ('-', '').
    tolocaleuppercase().split("").join("-"))
}

soletrar("digital-house")
soletrar("ctd")

console.log(soletrar)