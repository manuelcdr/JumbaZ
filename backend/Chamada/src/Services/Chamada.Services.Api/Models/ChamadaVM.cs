using Chamada.Domain.Abstractions.Entities;
using Chamada.Domain.Entities;
using System;
using System.Collections.Generic;
using TyperCore.Attributes;

namespace Chamada.Services.Api.Models
{
  [TyperReference(typeof(Chamada.Domain.Entities.Chamada))]
  [AcceptTyperActions(TyperAction.Insert, TyperAction.GetAll, TyperAction.GetActives, TyperAction.GetSingle)]
  public class ChamadaVM : DefaultModel
  {
    public ChamadaVM() : base(Guid.NewGuid().ToString()) { }

    public string TurmaId { get; set; }
    public DateTime Data { get; set; }
    public List<Presenca> ListaDePresenca { get; set; }
  }

  [TyperReference(typeof(Chamada.Domain.Entities.Chamada))]
  [AcceptTyperActions(TyperAction.Update)]
  public class ChamadaUpdateVM
  {
    public DateTime Data { get; set; }
    public List<Presenca> ListaDePresenca { get; set; }
  }

  //[TyperReference(typeof(Presenca))]
  //public class PresencaVM
  //{
  //  public string AlunoId { get; set; }
  //  public bool Presente { get; set; }
  //}
}
