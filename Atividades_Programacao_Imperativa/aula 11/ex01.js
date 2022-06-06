let filmes = ["star wars", "totoro",  "rocky", "pulp fiction",  "la vida es bella"]


// console.log (filmes [1])

// console.log (filmes [3])

// console.log (filmes.push ("Homem-Aranha"))

console.log (filmes)

console.log("---------------Lista")
// console.log (filmes.length)

for (let aux=1; aux <= filmes.length; aux++){

    console.log (aux+" - "+filmes[aux-1])

}

let favoritos = []

for (let aux=0; aux < favoritos.length; aux++){
    favoritos.push (filmes [aux-1])
    console.log (aux)

}
console.log (favoritos)