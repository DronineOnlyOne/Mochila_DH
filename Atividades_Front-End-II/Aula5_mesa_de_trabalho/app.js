function darkMode (){
    let dark = document.body;
    dark.classList.toggle("dark")

    let darkHeader = document.getElementsByTagName("header")[0];
    darkHeader.classList.toggle("darkHeader")

    let botaoDark = document.getElementsByTagName("button")[0]
    botaoDark.classList.toggle("botaoDark")

    let itensDark = document.querySelectorAll(".item")
    for (let i = 0; i < itensDark.length; i++) {
        itensDark[i].classList.toggle("itensDark");
    }
}