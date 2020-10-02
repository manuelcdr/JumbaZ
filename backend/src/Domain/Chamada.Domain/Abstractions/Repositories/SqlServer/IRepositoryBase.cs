using System.Threading.Tasks;

namespace Chamada.Abstractions.Repositories.SqlServer
{
    public interface IRepositoryBaseSqlServer
    {
        Task<int> SaveChanges();
    }
}
