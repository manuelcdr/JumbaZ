using Chamada.Domain.Abstractions.Entities;
using System.Collections.Generic;

namespace Chamada.Domain.Entities
{
   public class Turma : DefaultModel
   {
      public Turma() : base()
      {
         Alunos = new List<Aluno>();
      }

      public string Nome { get; set; }
      public List<Aluno> Alunos { get; set; }

      public void SetAlunos(IEnumerable<Aluno> alunos)
      {
         Alunos = new List<Aluno>(alunos);
      }
   }
}
