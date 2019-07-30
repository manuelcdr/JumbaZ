using Chamada.Abstractions.Services;
using Chamada.Domain.Abstractions.Entities;
using Chamada.Domain.Abstractions.Repositories;
using Chamada.Domain.Abstractions.Validations;
using Chamada.Infra.Cross.Helpers;
using TyperCore;
using TyperCore.Attributes;

namespace Chamada.Domain.Services
{
   public class GenericService : IGenericDomainService
   {
      private readonly IGenericRepository repository;
      private readonly ServiceBuilder serviceBuilder;

      public GenericService(IGenericRepository repository, ServiceBuilder serviceBuilder)
      {
         this.repository = repository;
         this.serviceBuilder = serviceBuilder;
      }

      public void Add(IDefaultModel entity)
      {
         var valid = true;

         if (repository.GetSingle(entity.Id) != null)
            return;

         var validatorTyper = Typer.GetRefTyper("Validator", TyperAction.Insert);
         if (validatorTyper != null)
         {
            var validator = serviceBuilder.GetService(validatorTyper);
            valid = (validator as IValidator).Run(entity);
         }

         if (valid)
            repository.Add(entity);

         return;
      }

      public void Update(IDefaultModel entity)
      {
         var valid = true;

         if (repository.GetSingle(entity.Id) == null)
            return;

         var validatorTyper = Typer.GetRefTyper("Validator", TyperAction.Update);
         if (validatorTyper != null)
         {
            var validator = serviceBuilder.GetService(validatorTyper);
            valid = (validator as IValidator).Run(entity);
         }

         if (valid)
            repository.Update(entity as IDefaultModel);

         return;
      }

      public void Delete(string id)
      {
         repository.Delete(id);

         return;
      }
   }
}
