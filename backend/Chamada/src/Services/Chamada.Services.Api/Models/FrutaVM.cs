using Chamada.Domain.Abstractions.Entities;
using Chamada.Domain.Entities;
using System;
using System.ComponentModel.DataAnnotations;
using TyperCore.Attributes;

namespace Chamada.Services.Api.Models
{
  [TyperReference(typeof(Fruta))]
  [AcceptTyperActions(TyperAction.GetSingle, TyperAction.GetAll, TyperAction.GetActives, TyperAction.Insert)]
  public class FrutaVM : DefaultModel
  {
    public FrutaVM() : base(Guid.NewGuid().ToString())
    {
    }

    [Required]
    public string Nome { get; set; }

    [Required]
    public string Tipo { get; set; }
  }

  [TyperReference(typeof(Fruta))]
  [AcceptTyperActions(TyperAction.Update)]
  public class FrutaUpdateVM
  {

    [Required]
    public string Nome { get; set; }

    [Required]
    public string Tipo { get; set; }
  }
}
