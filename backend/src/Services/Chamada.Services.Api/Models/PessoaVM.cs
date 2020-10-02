using Chamada.Domain.Abstractions.Entities;
using Chamada.Domain.Entities;
using System;
using TyperCore.Attributes;

namespace Chamada.Services.Api.Models
{
  [TyperReference(typeof(Pessoa))]
  [AcceptTyperActions(TyperAction.Insert)]
  public class PessoaInsertVM : DefaultModel
  {
    public PessoaInsertVM() : base(Guid.NewGuid().ToString())
    {
    }

    public string Nome { get; set; }
    public string Sobrenome { get; set; }
    public string Sexo { get; set; }
    public string Profissao { get; set; }
  }

  [TyperReference(typeof(Pessoa))]
  [AcceptTyperActions(TyperAction.Update)]
  public class PessoaUpdateVM
  {
    public string Nome { get; set; }
    public string Sobrenome { get; set; }
    public string Sexo { get; set; }
    public string Profissao { get; set; }
  }
}
