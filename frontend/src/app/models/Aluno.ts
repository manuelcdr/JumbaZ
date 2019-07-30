export class Aluno {
  id: string;
  turmaId: string;
  nome: string;
  apelido: string;
  sexo: string;

  constructor(turmaId: string = '') {
    this.turmaId = turmaId;
  }
}
