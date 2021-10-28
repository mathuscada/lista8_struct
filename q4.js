const array = [
    {
        nome: "Aluno1",
        idade: 18,
        mediaFinal: 7,
    },
    {
        nome: "Aluno2",
        idade: 17,
        mediaFinal: 10,
    },
    {
        nome: "Aluno3",
        idade: 16,
        mediaFinal: 3,
    },
    {
        nome: "Aluno4",
        idade: 19,
        mediaFinal: 8,
    },
    {
        nome: "Aluno5",
        idade: 21,
        mediaFinal: 5,
    },
    {
        nome: "Aluno6",
        idade: 35,
        mediaFinal: 6,
    }    
]

const classStatistics = (turma) => {
    let soma = 0;
    turma.forEach(aluno => {
        soma += aluno.mediaFinal;
    });
    console.log("Média da turma: " + soma/turma.length);
    let somaQuadrado = 0;
    turma.forEach(aluno => {
        somaQuadrado += (aluno.mediaFinal - soma/turma.length)**2;
    });
    console.log("Desvio Padrão da turma: " + Math.sqrt(somaQuadrado/turma.length));
    let reprovados = 0;
    turma.forEach(aluno => {
        if(aluno.mediaFinal < 5) {
            reprovados++;
        }
    });
    console.log("Reprovados: " + reprovados + " de " + turma.length + "\nAprovados: " + (turma.length - reprovados) + " de " + turma.length);
}

const mencao = ({mediaFinal}) => {
    return mediaFinal < 5 ? "RR" : 
    (mediaFinal < 7 ? "MM" : 
    (mediaFinal < 9 ? "MS" : "SS")
    );
};

const addMencao = (turma) => {
    let newTurma = [];
    let alunoObj;
    for(let i = 0; i < turma.length; i++) {
        alunoObj = {...turma[i], "mencao": mencao(turma[i])};
        newTurma = [...newTurma, alunoObj];
    }
    return newTurma;
}

classStatistics(array);
const turmaComMencoes = addMencao(array);
console.log(turmaComMencoes);