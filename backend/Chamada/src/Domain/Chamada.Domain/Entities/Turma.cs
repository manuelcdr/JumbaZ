using Chamada.Domain.Abstractions.Entities;
using System.Collections.Generic;

namespace Chamada.Domain.Entities
{
  public class Turma : DefaultModel
  {
    public string Nome { get; set; }
    public List<Aluno> Alunos { get; set; }
  }
}
