const Aluno = require('./Aluno')

const Curso = {
    nomeCurso: "CTD - DH",
    notaAprovacao: 7,
    faltasMaximas: 10,
    listaEstudantes: [],
    addAlunos: function (a, b, c) {
        return Curso.listaEstudantes.push(new Aluno(a, b, c))
    },
    aprovacao: function (objeto, nome) {
        let aluno = objeto.filter(e => e.nome == nome)

        let faltas = aluno.map(e => e.faltas)

        let mediaDoAluno = aluno.map(e => e.calcularMedia())

        if (mediaDoAluno >= Curso.notaAprovacao && faltas < Curso.faltasMaximas || faltas == Curso.faltasMaximas
            && mediaDoAluno > Curso.notaAprovacao / 10 + Curso.notaAprovacao) {
            return console.log(true)
        }
        else {
            return console.log(false)
        }
    },
    listaDeAprovados: aprovReprov => {
        let listaAprovadosReprovados = []
        aprovReprov.map(e => {
            if (e.calcularMedia() >= Curso.notaAprovacao && e.faltas < Curso.faltasMaximas ||
                e.faltas == Curso.faltasMaximas && e.calcularMedia() > Curso.notaAprovacao / 10 + Curso.notaAprovacao) {
                return listaAprovadosReprovados.push(true)
            }
            else {
                return listaAprovadosReprovados.push(false)
            }
        })
        console.log(listaAprovadosReprovados)
    }

}


Curso.addAlunos("Matheus Ribeiro", 3, [10, 10, 10])
Curso.addAlunos("Azra Midmoon", 0, [8, 9, 9])
Curso.addAlunos("Avani Solar", 5, [8, 7, 10])
Curso.addAlunos("Sylvanna Correventos", 3, [7, 7, 7])        
Curso.addAlunos("Illidan Tempesfúria", 5, [8, 7, 7])
Curso.addAlunos("Thrall", 1, [6, 6, 5])                     
Curso.addAlunos("Jaina Proudmoore", 0, [9, 8, 7])
Curso.addAlunos("Garrosh Hellscream", 9, [2, 3, 1])

module.exports = Curso