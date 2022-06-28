const Curso = require ('./modulos/Curso')
const Aluno = require ('./modulos/Aluno')

// Calcular a média do Aluno
console.log("----- Calcular a média do aluno ----")
console.log("O Aluno "+Curso.listaEstudantes[2].nome+" Tem a media de "+Curso.listaEstudantes[2].calcularMedia().toFixed(1)+ " pontos")

// ------------------------------------- // ---------------------------------------------------------- // 

// Mostra se o aluno foi ou não aprovado
console.log("---- Aprovação ou reprovação do aluno ----")
Curso.aprovacao(Curso.listaEstudantes,"Thrall")

// ------------------------------------- // ---------------------------------------------------------- // 

// Mostra a lista de aprovação ou reprovação
console.log("---- Lista de aprovação ou reprovação ----")
Curso.listaDeAprovados(Curso.listaEstudantes)

// ------------------------------------- // ---------------------------------------------------------- // 


