using Chamada.Abstractions.Services;
using Chamada.Domain.Abstractions.Entities;
using Chamada.Domain.Abstractions.Repositories;
using TyperCore;

namespace Chamada.Domain.Services
{
  public class GenericService : IGenericDomainService
  {
    private readonly IGenericRepository repository;

    public GenericService(IGenericRepository repository)
    {
      this.repository = repository;
    }

    public void Add(IDefaultModel entity)
    {
      if (repository.GetSingle(entity.Id, Typer.GetObjectReference() as IDefaultModel) != null)
        return;

      repository.Add(entity);

      return;
    }

    public void Update(IDefaultModel entity)
    {
      if (repository.GetSingle(entity.Id, Typer.GetObjectReference() as IDefaultModel) == null)
        return;

      repository.Update(entity as IDefaultModel);

      return;
    }

    public void Delete(string id)
    {
      repository.Delete(id, Typer.GetObjectReference() as IDefaultModel);

      return;
    }
  }
}
