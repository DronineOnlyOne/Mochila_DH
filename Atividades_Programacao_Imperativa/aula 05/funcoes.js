function somaMath (num1,num2) {
    // console.log(num1 + num2)
    return (num1 + num2)
}

let result = somaMath (5,5)
console.log (result)

console.log (somaMath (35,5) )

result = somaMath (67,5)
console.log (result)

function repeticao (info, qtd) {
    return info.repeat (qtd)
}

console.log (repeticao ("Math ", 3))

function sub (a = 0, b = 0) {
    return a - b
}

console.log (sub(9,3))