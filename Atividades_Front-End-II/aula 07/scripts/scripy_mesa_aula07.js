let botao1 = document.getElementById("botao1")
let botao2 = document.getElementById("botao2")
let botao3 = document.getElementById("botao3")
let botao4 = document.getElementById("botao4")
let botao5 = document.getElementById("botao5")
let botao6 = document.getElementById("botao6")


function mudarImagem1() {
    let outraFoto = document.getElementsByTagName("img")[0]; // 0 se refere a ordem do Array

    if (botao1.click) {
        outraFoto.setAttribute("src", "./imagens/tigreGodito.jpg")

    }
}

function mudarImagem2() {
    let outraFoto = document.getElementsByTagName("img")[1]; // 1 se refere a ordem do Array

    if (botao2.click) {
        outraFoto.setAttribute("src", "./imagens/leaoPica.jpg")
    }
}

function mudarImagem3() {
    let outraFoto = document.getElementsByTagName("img")[2]; // 2 se refere a ordem do Array

    if (botao3.click) {
        outraFoto.setAttribute("src", "./imagens/leopardokk.jpg")
    }
}

function mudarImagem4() {
    let outraFoto = document.getElementsByTagName("img")[3]; // 3 se refere a ordem do Array

    if (botao4.click) {
        outraFoto.setAttribute("src", "./imagens/gatoPreto.jpg")
    }
}

function mudarImagem5() {
    let outraFoto = document.getElementsByTagName("img")[4]; // 4 se refere a ordem do Array

    if (botao5.click) {
        outraFoto.setAttribute("src", "./imagens/jaguarCarro.jpeg")
    }
}

function mudarImagem6() {
    let outraFoto = document.getElementsByTagName("img")[5]; // 5 se refere a ordem do Array
    if (botao6.click) {
        outraFoto.setAttribute("src", "./imagens/guepardoKKK.jpg")
    }
}
