const div = (valor1, valor2) => {
    if (valor1 == 0 || valor2 == 0) {
        return "Não é divisivel por 0"
    }
    else {
        return valor1 / valor2
    }
}


export default div;