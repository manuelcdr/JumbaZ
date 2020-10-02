using Chamada.Domain.Abstractions.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Chamada.Domain.Abstractions.Repositories
{
    public interface IGenericRepositoryRead
    {
        object GetSingle(string id);
        /// <summary>
        /// Retorna os ativos do CurrentTyper
        /// </summary>
        IEnumerable<object> GetAll();
        /// <summary>
        /// Retorna todos do CurrentTyper
        /// </summary>
        IEnumerable<object> GetActives();
        IEnumerable<object> GetAll<T>() where T : class, IDefaultModel;
        IEnumerable<object> GetAll<T>(T objRef) where T : class, IDefaultModel;
        IEnumerable<object> GetActives<T>() where T : class, IDeactivated;
        IEnumerable<object> GetActives<T>(T objRef) where T : class, IDeactivated;
        IEnumerable<T> Search<T>(Expression<Func<T, bool>> predicate) where T : class, IDefaultModel;
        IEnumerable<object> Search(string filter);
    }

    public interface IGenericRepositoryWrite
    {
        T Add<T>(T entidade) where T : class, IDefaultModel;
        T Update<T>(T entidade) where T : class, IDefaultModel;
        /// <summary>
        /// 
        /// </summary>
        /// <param name="id"></param>
        /// <param name="_type">Caso esteja null, busca pelo CurrentTyper</param>
        /// <returns></returns>
        object Delete(string id, Type _type = null);
    }

    public interface IGenericRepository :
        IGenericRepositoryRead,
        IGenericRepositoryWrite
    { }
}
