//Pipoca= 1       10 seg
//Macarrão = 2    8 seg
//Carne = 3       15 seg
//Feijão = 4      12 seg
//Brigadeiro = 5  8 seg 

function microondas(comida, tempo) {
    let pipoca = 1
    let macarrao = 2
    let carne = 3
    let feijao = 4
    let brigadeiro = 5

    if (comida == 1) {
        if (tempo > 2 * 10 && 3 * 10) {
            return "A pipoca queimou! D:"
        }
        else if (tempo < 10) {
            return "Ainda tem milho pra estourar!"
        }
        else if (tempo > 3 * 10) {
            return "KABUUUUUUUUUUUUUUUM!!!!!!!!"
        }
        else {
            return "Pipoquinha pronta uma delicia"
        }
    }

    if (comida == 2) {

        if (tempo > 2 * 8 && 3 * 8) {
            return "Queimou o macarrão T-T"
        }
        else if (tempo < 8) {
            return "Ainda ta cru!"
        }
        else if (tempo > 3 * 8) {
            return "KABUUUUUUUUUUUUUUUM!!!!!!!!"
        }
        else {
            return "Macarrãozinho uma delicia "
        }
    }

    if (comida == 3) {

        if (tempo > 2 * 15 && 3 * 15) {
            return "Queimou a carne D:"
        }
        else if (tempo < 15) {
            return "Carne ta fria viu?"
        }
        else if (tempo > 3 * 15) {
            return "KABUUUUUUUUUUUUUUUM!!!!!!!!"
        }
        else {
            return "Carne quentinha uma delicia!"
        }
    }

    if (comida == 4) {
        if (tempo > 2 * 12 && 3 * 12) {
            return "Feijão queimado D:"
        }
        else if (tempo < 12) {
            return "Nao deu tempo pra esquentar o feijao!!"
        }
        else if (tempo > 3 * 12) {
            return "KABUUUUUUUUUUUUUUUM!!!!!!!!"
        }
        else {
            return "Feijãozinho pronto!"
        }
    }

    if (comida == 5){

        if (tempo > 2 * 8 && 3 * 8) {
            return "QUEIMOU O BRIGADEIRO!! T-T"
        }
        else if (tempo < 8) {
            return "Ainda não ficou pronto o brigadeiro!!"
        }
        else if (tempo > 3 * 8) {
            return "KABUUUUUUUUUUUUUUUM!!!!!!!!"
        }
        else {
            return "Brigadeirinho pronto!"
        }
    }

    else {
        return "Essa comida não ta no cardapio não."
    }
}

console.log (microondas(5, 8))