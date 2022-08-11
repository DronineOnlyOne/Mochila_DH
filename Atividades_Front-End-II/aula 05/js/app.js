// darkMode teste
let button = document.createElement("button")
button.innerHTML = "Dark Mode"

let body = document.getElementsByTagName("body")[0]
body.appendChild(button)

button.addEventListener("click", function darkMode() {
    let dark = document.body
    dark.classList.toggle("dark-mode")
})


// body teste

// let body = document.querySelector('body')

// body.style.backgroundColor = 'blue'

// H1 teste

let h1 = document.querySelector('h1')

h1.innerHTML = "<h1> Teste Inner </h1>"

h1.style.fontSize = '20px'

// Li teste

let lis = document.querySelectorAll('li')

lis.forEach(li => {
    console.log(li.innerText)
    li.classList.toggle('li-novo')
});
