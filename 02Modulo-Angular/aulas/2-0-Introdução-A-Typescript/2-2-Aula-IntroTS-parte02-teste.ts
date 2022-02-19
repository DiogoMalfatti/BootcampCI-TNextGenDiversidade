//function cadastrarAluno(aluno: { matricula: number; nome: string }) {}

//cadastrarAluno({ matricula: 123, nome: "Diogo" });

// interface

interface Aluno {
  matricula: number;
  nome: string;
  dataNascimento: string;
}

function cadastrarAluno(aluno: Aluno) {}

// compatibilidade de tipos

let aluno2 = {
  matricula: 123,
  nome: "João",
  dataNascimento: "01/01/2000",
  turma: 3,
};

cadastrarAluno(aluno2);

// classes

class Estudante {
  matricula: number;
  nome: string;

  salvar() {}
}

let estudante1 = new Estudante();

estudante1.salvar();
