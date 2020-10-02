using Chamada.Domain.Abstractions.Entities;

namespace Chamada.Abstractions.Services
{
   public interface IGenericDomainService
    {
        void Add(IDefaultModel entity);
        void Update(IDefaultModel entity);
        void Delete(string id);
    }
}
