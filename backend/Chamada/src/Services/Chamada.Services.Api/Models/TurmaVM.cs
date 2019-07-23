using Chamada.Domain.Abstractions.Entities;
using Chamada.Domain.Entities;
using System;
using System.ComponentModel.DataAnnotations;
using TyperCore.Attributes;

namespace Chamada.Services.Api.Models
{
  [TyperReference(typeof(Turma))]
  [AcceptTyperActions(TyperAction.Insert, TyperAction.GetAll, TyperAction.GetActives, TyperAction.GetSingle)]
  public class TurmaVM : DefaultModel
  {
    public TurmaVM() : base(Guid.NewGuid().ToString())
    {
    }

    [Required]
    public string Nome { get; set; }
  }

  [TyperReference(typeof(Turma))]
  [AcceptTyperActions(TyperAction.Update)]
  public class TurmaUpdateVM
  {
    [Required]
    public string Nome { get; set; }
  }
}
