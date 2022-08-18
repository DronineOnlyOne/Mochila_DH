
// Mostre um alerta na página quando a tela terminar de ser carregada.
window.addEventListener('load', () => alert("A pagina foi carregada!"))

// Previna a página de ser recarregada quando houver o submit utilizando preventDefault().
let botaoSub = document.getElementById("sub")
botaoSub.addEventListener('click', function(event){
    console.log("Teste")
    event.preventDefault()
})

// Adicione uma cor a um texto quando o mouse ficar acima do mesmo e outra cor quando ele sair do mesmo.
let textoMudaCor = document.getElementById("textoCor")
textoMudaCor.onmouseover = function(){
    textoMudaCor.style.color = 'blue'
}
textoMudaCor.onmouseout = function(){
    textoMudaCor.style.color = 'white'
}

// Faça um trecho de código que utilize algum evento de teclado, esse evento irá escrever o conteúdo do input em uma tag <p>
// e logo abaixo o número de vezes que esse evento foi chamado. Exemplo: <p>futebol</p> <p>7</p> . 
 

onkeydown = function(event){
    let escrita = document.getElementById("escrita")

    escrita.innerHTML += `${event.key}`
}