using Chamada.Domain.Abstractions.Entities;
using System.Collections.Generic;

namespace Chamada.Domain.Entities
{
   public class Turma : DefaultModel
   {
      public Turma() : base()
      {
         Alunos = new List<Aluno>();
         Chamadas = new List<Chamada>();
      }

      public string Nome { get; set; }

      public List<Aluno> Alunos { get; private set; }

      public List<Chamada> Chamadas { get; private set; }

      public void SetAlunos(IEnumerable<Aluno> alunos)
      {
         Alunos = new List<Aluno>(alunos);
      }

      public void SetChamadas(IEnumerable<Chamada> chamadas)
      {
         Chamadas = new List<Chamada>(chamadas);
      }
   }
}
