using Chamada.Domain.Entities;
using System;
using TyperCore.Attributes;

namespace Chamada.Services.Api.Models
{
  [TyperReference(typeof(Fruta), typeof(Animal))]
  [AcceptTyperActions]
  public class TestVM
  {
    public string Nome { get; set; }
    public string Tipo { get; set; }
  }
}
