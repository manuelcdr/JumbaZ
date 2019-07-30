using Chamada.Domain.Abstractions.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Chamada.Domain.Abstractions.Repositories
{
  public interface IGenericRepositoryReadDefault
  {
    T GetSingle<T>(string id, T entidadeReferencia) where T : class, IDefaultModel;
    IEnumerable<T> GetAll<T>(T entidadeReferencia) where T : class;
    IEnumerable<T> GetActives<T>(T entidadeReferencia) where T : class, IDeactivated;
    IEnumerable<T> Search<T>(Expression<Func<T, bool>> predicate) where T : class;
    IEnumerable<T> Search<T>(string filter) where T : class;
   }

  public interface IGenericRepositoryWriteDefault
  {
    void Add<T>(T entidade) where T : class;
    void Update<T>(T entidade) where T : class, IDefaultModel;
    void Delete<T>(string id, T entidadeReferencia) where T : class, IDefaultModel;
  }

  public interface IGenericRepositoryRead :
      IGenericRepositoryReadDefault
  { }

  public interface IGenericRepositoryWrite :
      IGenericRepositoryWriteDefault
  { }

  public interface IGenericRepository :
      IGenericRepositoryRead,
      IGenericRepositoryWrite
  { }
}
