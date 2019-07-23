namespace Chamada.Abstractions.Repositories
{
    public interface IUnitOfWork
    {
        void BeginTransaction();
        void Commit();
        void Rollback();
        int SaveChanges();
    }
}
