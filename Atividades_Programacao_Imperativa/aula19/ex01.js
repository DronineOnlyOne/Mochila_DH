// ------------------------------------ Parte 1 ------------------------------------
const pessoa = [
    {
        sexo: 'M',
        altura: 1.80
    },
    {
        sexo: 'F',
        altura: 1.65
    },
    {
        sexo: 'M',
        altura: 1.69
    },
    {
        sexo: 'F',
        altura: 1.70
    },
    {
        sexo: 'M',
        altura: 1.69
    },
    {
        sexo: 'F',
        altura: 1.81
    },
    {
        sexo: 'M',
        altura: 1.75
    },
    {
        sexo: 'F',
        altura: 1.50
    },
    {
        sexo: 'M',
        altura: 1.90
    },
    {
        sexo: 'F',
        altura: 1.72
    },
    {
        sexo: 'M',
        altura: 1.87
    },
    {
        sexo: 'F',
        altura: 1.55
    },
    {
        sexo: 'M',
        altura: 1.68
    },
    {
        sexo: 'F',
        altura: 1.59
    },
    {
        sexo: 'M',
        altura: 2.00
    },
    {
        sexo: 'F',
        altura: 1.76
    },
    {
        sexo: 'M',
        altura: 1.62
    },
    {
        sexo: 'F',
        altura: 1.95
    },
    {
        sexo: 'M',
        altura: 1.86
    },
    {
        sexo: 'F',
        altura: 1.53
    },]

// Altura Maior e Menor do grupo

console.log("------------------ Maior e menor altura do grupo ------------------")
let menorAltura = 100
let maiorAltura = 0

pessoa.forEach(function (p) {
    if (p.altura < menorAltura) {
        menorAltura = p.altura
    }
    else if (p.altura > maiorAltura) {
        maiorAltura = p.altura
    }
});

console.log("A menor altura é " + menorAltura.toFixed(2) + " metros")
console.log("A maior altura é " + maiorAltura.toFixed(2) + " metros")

// Quantia de mulheres e a media de altura

console.log("------------------ Quantia de mulheres e a media de altura ------------------")
let mediaF = 0
let qtdm = 0
for (let i = 0; i < pessoa.length; i++) {
    if (pessoa[i].sexo == "F") {
        qtdm++
        mediaF = pessoa[i].altura + mediaF
    }
}
console.log("tem " + qtdm + " de mulheres")
mediaF = mediaF / qtdm
console.log(mediaF.toFixed(2) + " é a altura media feminina")


// Quantia de homens
console.log("------------------ Quantia de homens ------------------")

let quantiaHomem = 0

for (let i = 0; i < pessoa.length; i++) {
    if (pessoa[i].sexo == "M") {
        quantiaHomem++
    }
}

console.log("tem " + quantiaHomem + " homens")

// ------------------------------------ Parte 2 ------------------------------------
var idades = [18, 20, 25, 17, 40, 35, 39, 58, 65, 28, 21, 41, 14, 80, 12];
var opinioes = [1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3, 2, 1, 2, 3];

function otimoMedia(opinioes, idades) {
    var soma = 0;
    var qtde = 0;
    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 3) {
            soma += idades[i];
            qtde++;
        }
    }
    return (soma / qtde);
}

function regularQtde(opinioes) {
    var qtde = 0;

    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 1) {
            qtde++;
        }
    }
    return qtde;
}

function bomPorcentagem(opinioes) {
    var qtde = 0;

    for (let i = 0; i < opinioes.length; i++) {
        if (opinioes[i] === 2) {
            qtde++;
        }
    }
    return (qtde / opinioes.length) * 100;
}

console.log("Média de idades que Responderam ÓTIMO é " + otimoMedia(opinioes, idades).toFixed(1) + ".");
console.log("Responderam REGULAR " + regularQtde(opinioes) + " Pessoas.");
console.log("Responderam BOM " + bomPorcentagem(opinioes).toFixed(0) + "% das Pessoas.");