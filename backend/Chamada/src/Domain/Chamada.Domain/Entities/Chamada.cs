using Chamada.Domain.Abstractions.Entities;
using System;
using System.Collections.Generic;

namespace Chamada.Domain.Entities
{
  public class Chamada : DefaultModel
  {
    public string TurmaId { get; set; }
    public DateTime Data { get; set; }
    public List<Presenca> ListaDePresenca { get; set; }
  }

  public class Presenca
  {
    public string AlunoId { get; set; }
    public bool Presente { get; set; }
  }
}
