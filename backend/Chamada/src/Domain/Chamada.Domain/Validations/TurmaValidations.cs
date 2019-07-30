using Chamada.Domain.Abstractions.Repositories;
using Chamada.Domain.Abstractions.Validations;
using Chamada.Domain.Entities;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using TyperCore.Attributes;

namespace Chamada.Domain.Validations
{
   [TyperReference(typeof(Turma))]
   [AcceptTyperActions(TyperAction.Insert, TyperAction.Update)]
   public class TurmaUpInsertValidation : IValidator
   {
      private readonly IGenericRepositoryRead repository;

      public TurmaUpInsertValidation(IGenericRepositoryRead repository)
      {
         this.repository = repository;
      }

      public bool Run<T>(T entity) where T : class
      {
         var turma = entity as Turma;
         var turmas = repository.Search<Turma>(x => x.Nome == turma.Nome && x.Id != turma.Id);
         if (turmas.Any())
            return false;

         return true;
      }
   }
}
