
// MEDIA TOTAL DE NOTAS

// MEDIA DE ALUNOS HOMENS E MULHERES


function Aluno(nome, sexo, id, notas, turma) {
    this.nome = nome
    this.sexo = sexo
    this.id = id
    this.notas = notas
    this.turma = turma
    this.media = function(){

        let media = this.notas.reduce(function (a, b) {
            return a + b 
        })
        media = media / this.notas.length
        return media

    }

    this.mediaTotal = function (){

        let mediaTotal = this.notas.reduce(function (c,d){
            return c + d
        })
        mediaTotal = mediaTotal + this.notas.length + this.notas.length + this.notas.length + this.notas.length
        + this.notas.length + this.notas.length + this.notas.length + this.notas.length + this.notas.length
        + this.notas.length/ this.nome.length
        return mediaTotal

    }
}

const alunos = []
alunos.push (new Aluno("Azra","F",01,[9,10,8],9))
alunos.push (new Aluno("Dronine","F",18,[9,9,6],9))
alunos.push (new Aluno("Vyc","M",19,[7,8,8],9))
alunos.push (new Aluno("Math","M",02,[7,8,7],9))
alunos.push (new Aluno("Scobar","M",21,[6,7,7],9))
alunos.push (new Aluno("Lana","F",22,[8,8,9],9))
alunos.push (new Aluno("Quezia","F",05,[10,9,9],9))
alunos.push (new Aluno("Atenas","F",09,[10,10,10],9))
alunos.push (new Aluno("Konshu","M",98,[8,9,8],9))
alunos.push (new Aluno("Apolo","M",05,[7,7,7],9))

// Media de cada aluno 
console.log (" ----- Media de cada aluno ----- ")
console.log(alunos[4].media().toFixed(2))

// Media total da turma 

console.log(" ----- Media total da turma ----- ")

 console.log (alunos[7].mediaTotal().toFixed(1))
