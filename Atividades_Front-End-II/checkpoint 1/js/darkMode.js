
let switchToogle = document.getElementById('darkModeSwitch')
let headerTitle = document.getElementById('tituloHeader')
let body = document.querySelector('body');
let formDark = document.getElementById('formulario')
let footerDark = document.getElementById('pe-da-pagina')

function darkMode() {

    headerTitle.classList.toggle('darkTitleHeader')

    body.classList.toggle('darkBody')

    formDark.classList.toggle('darkForm')
    
    footerDark.classList.toggle('darkFootter')

}