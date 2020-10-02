using Chamada.Domain.Abstractions.Entities;
using System.Collections.Generic;

namespace Chamada.Domain.Entities
{
  public class Professor : DefaultModel
  {
    public string Nome { get; set; }
    public string Email { get; set; }
    public List<Turma> Turmas { get; set; }
  }
}
