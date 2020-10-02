using Chamada.Domain.Abstractions.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Chamada.Domain.Abstractions.Repositories.SqlServer
{
    public interface IGenericRepositoryReadSqlServer
    {
        object GetSingle(string id);
        IEnumerable<object> GetAll();
        IEnumerable<object> GetActives();
        IEnumerable<T> Search<T>(Expression<Func<T, bool>> predicate) where T : class;
    }

    public interface IGenericRepositoryWriteSqlServer
    {
        T Add<T>(T entidade) where T : class;
        T Update<T>(T entidade) where T : class;
        object Delete(string id);
    }

    public interface IGenericRepositorySqlServer :
        IGenericRepositoryReadSqlServer,
        IGenericRepositoryWriteSqlServer
    { }
}
