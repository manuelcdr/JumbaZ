using Chamada.Domain.Abstractions.Entities;
using Chamada.Domain.Entities;
using System;
using System.ComponentModel.DataAnnotations;
using TyperCore.Attributes;

namespace Chamada.Services.Api.Models
{
  [TyperReference(typeof(Aluno))]
  [AcceptTyperActions(TyperAction.Insert, TyperAction.GetAll, TyperAction.GetActives, TyperAction.GetSingle)]
  public class AlunoVM : DefaultModel
  {
    public AlunoVM() : base(Guid.NewGuid().ToString())
    {
    }

    [Required]
    public string Nome { get; set; }

    public string Apelido { get; set; }

    public Sexo Sexo { get; set; }
  }

  [TyperReference(typeof(Aluno))]
  [AcceptTyperActions(TyperAction.Update)]
  public class AlunoUpdateVM
  {
    [Required]
    public string Nome { get; set; }

    public string Apelido { get; set; }

    public Sexo Sexo { get; set; }
  }
}
