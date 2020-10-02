using Chamada.Abstractions.Services;
using Chamada.Domain.Abstractions.Entities;
using Chamada.Domain.Abstractions.Repositories;
using Chamada.Domain.Abstractions.Validations;
using Chamada.Infra.Cross.Helpers;
using Microsoft.AspNetCore.Mvc;
using TyperCore;
using TyperCore.Attributes;

namespace Chamada.Domain.Services
{
    public class GenericDomainService : IGenericDomainService
    {
        private readonly IGenericRepository _repository;
        private readonly ServiceBuilder _serviceBuilder;
        private readonly Typer _typer;

        public GenericDomainService(IGenericRepository repository, ServiceBuilder serviceBuilder, Typer typer)
        {
            this._repository = repository;
            this._serviceBuilder = serviceBuilder;
            this._typer = typer;
        }

        public void Add(IDefaultModel entity)
        {
            var valid = true;

            if (_repository.GetSingle(entity.Id) != null)
                return;

            var validatorTyper = _typer.GetRefTyper("Validator", TyperAction.Insert);
            if (validatorTyper != null)
            {
                var validator = _serviceBuilder.GetService(validatorTyper);
                valid = (validator as IValidator).Run(entity);
            }

            if (valid)
                _repository.Add(entity);

            return;
        }

        public void Update(IDefaultModel entity)
        {
            var valid = true;

            if (_repository.GetSingle(entity.Id) == null)
                return;

            var validatorTyper = _typer.GetRefTyper("Validator", TyperAction.Update);
            if (validatorTyper != null)
            {
                var validator = _serviceBuilder.GetService(validatorTyper);
                valid = (validator as IValidator).Run(entity);
            }

            if (valid)
                _repository.Update(entity as IDefaultModel);

            return;
        }

        public void Delete(string id)
        {
            _repository.Delete(id);

            return;
        }
    }
}
