using Chamada.Domain.Abstractions.Entities;
using Chamada.Domain.Entities;
using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;
using TyperCore.Attributes;

namespace Chamada.Services.Api30.ViewModels
{
   [TyperReference(typeof(Turma))]
   [AcceptTyperActions(TyperAction.Insert)]
   public class TurmaInsertVM : DefaultModel
   {
      //public TurmaInsertVM() : base(Guid.NewGuid().ToString()) { }

      [Required]
      public string Nome { get; set; }
   }

   [TyperReference(typeof(Turma))]
   [AcceptTyperActions(TyperAction.GetAll, TyperAction.GetActives, TyperAction.GetSingle)]
   public class TurmaVM
   {
      public string Id { get; set; }

      public string Nome { get; set; }

      //public List<AlunoVM> Alunos { get; set; }

      //public List<ChamadaVM> Chamadas { get; set; }
   }

   [TyperReference(typeof(Turma))]
   [AcceptTyperActions(TyperAction.Update)]
   public class TurmaUpdateVM
   {
      [Required]
      public string Nome { get; set; }
   }
}
