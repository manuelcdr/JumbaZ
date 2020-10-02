import { Aluno } from './Aluno';

export class Course {
  id: string;
  nome: string;
  alunos = new Array<Aluno>();
}
