
// -------------------------------- Exercicio 01--------------------------------------------

let FizzBuzz = (x, y) => {
    for (let i = 1; i <= 100; i++) {
        if (i % x === 0 && i % y !== 0) {
            console.log(i + ' - Fizz' + '\n');
        } else if (i % y === 0 && i % x !== 0) {
            console.log(i + ' - Buzz' + '\n');
        } else if (i % y === 0 && i % x === 0) {
            console.log(i + ' - FizzBuzz' + '\n');
        }
    }
    return '\n';
}

console.log(FizzBuzz(6, 5))


// -------------------------------- Exercicio 02--------------------------------------------


//  function fatorial(x){
//      let fatorial =1;
//      for (let i = 1; i <=5; i++){                      //versao01
//          fatorial *= i;
//      }
//      return fatorial;
//  }

//  console.log(fatorial(5));


// function fatorial (x){
//     let result=1;
//     for(let i=x;i>1;i--){                             //versao02
//         result *= i;
//     }
//     return result;
// }
// console.log(fatorial(5));


// const fatorial = n => {
//     if (n > 1) {
//         return n * fatorial(n - 1)                   //versao sem for
//     }
//     return n
// }

// console.log(fatorial(5))
