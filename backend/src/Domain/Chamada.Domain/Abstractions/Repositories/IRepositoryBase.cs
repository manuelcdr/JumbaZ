using System.Threading.Tasks;

namespace Chamada.Abstractions.Repositories
{
    public interface IRepositoryBase
    {
        Task<int> SaveChanges();
    }
}
