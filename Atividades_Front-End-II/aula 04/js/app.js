let test1 = document.querySelector ('h1');
let test2= document.querySelectorAll ('h2');
let test3 = document.getElementById ('numeros');
let test4 = document.getElementsByClassName ('paragrafo');
let test5 = document.querySelectorAll ('#numeros li')

console.log(test1);
console.log(test2);
console.log(test3);
console.log(test4);

for (let i = 0; i < test5.length; i++) {
     console.log(test5[i].innerText)
    
};