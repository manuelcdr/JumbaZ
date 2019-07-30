import { Aluno } from './Aluno';

export class Turma {
  id: string;
  nome: string;
  alunos = new Array<Aluno>();
}
