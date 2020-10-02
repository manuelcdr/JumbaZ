using Chamada.Abstractions.Repositories;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace Chamada.Infra.Data.SqlServer
{
    public abstract class SqlServerRepositoryBase : IRepositoryBase, IUnitOfWork
    {
        protected readonly SqlServerContext Context;
        public SqlServerRepositoryBase(SqlServerContext context)
        {
            Context = context;
        }

        protected IList<T> GetCollection<T>() where T : class
        {
            var collection = Context.Set<T>().ToList();
            return collection;
        }

        protected IList<T> GetCollection<T>(T entidadeReferencia) where T : class
        {
            var collection = GetCollection<T>().ToList();
            return collection;
        }

        public void BeginTransaction()
        {
            Context.Database.BeginTransaction();
        }

        public void Commit()
        {
            Context.Database.CommitTransaction();
        }

        public void Rollback()
        {
            Context.Database.RollbackTransaction();
        }

        public Task<int> SaveChanges()
        {
            return Context.SaveChangesAsync();
        }

        int IUnitOfWork.SaveChanges()
        {
            return Context.SaveChanges();
        }
    }
}
