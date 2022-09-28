/* Simulação de progresso em 5seg */
const tempoDeCarregamento = 2000;

/* Criação da função da barra de carregamento/animção dela */

function animarBarra() {

    /* Vamos chamar do HTMl o elemento Barra */
    let barra = document.getElementById("barra");

    /* Aqui definimos o processo da barra, pra assegurar que começara em 0, ou o valor
    desejado */

    let width = 0;

    /* Aqui vamos calcular o progresso da barra no tempo total de progresso de carga
    que definimos */
    const progressoSobreTempoTotal = tempoDeCarregamento / 100;

    /* Criamos um intervalo que se repete no tempo que calculamos para
    ir incrementando o progresso */
    let id = setInterval(incrementarProgresso, progressoSobreTempoTotal)

    /* Função que ira incrementar o progresso */
    function incrementarProgresso() {
        if (width >= 100) {
            crearInterval(id);
        } else {
            width++

            /* Modificação no DOM, para impactar o progresso da barra */
            barra.style.width = width + "%";
            barra.innerHTML = width + "%";
        }
    }

}

/* Adicionamos um evento ao botao de iniciação de carga */

document.querySelector("#iniciar-carregamento").addEventListener("click",animarBarra)

