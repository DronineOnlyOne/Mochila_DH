
let botaoSub = document.getElementById("inserirPers")
botaoSub.addEventListener('click', function(event){
    event.preventDefault()
})

function addPers() {
    const listaPers = document.querySelector(".lista-Personagens")
    const inputTitulo = document.querySelector("#inputName").value
    const inputDesc = document.querySelector("#inputDesc").value
    const inputImg = document.querySelector("#inputImg").value

    const newPers = ` <div class="card">
    <div class="conteudo-Card">
    <img src="${inputImg}" alt="#" class="imagem-Card">
    <p class="titulo-Card">${inputTitulo}</p>
    <p class="desc-Card">${inputDesc}</p>`;
    

    listaPers.innerHTML += newPers;
}





