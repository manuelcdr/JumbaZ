namespace Chamada.Abstractions.Repositories.SqlServer
{
    public interface IUnitOfWorkSqlServer
    {
        void BeginTransaction();
        void Commit();
        void Rollback();
        int SaveChanges();
    }
}
