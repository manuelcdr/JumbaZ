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
  }

  public interface IGenericRepositoryReadByParam
  {
    //object GetSingle(object id, Type type = null);
    //IEnumerable<object> GetAll(Type type = null);
    //IEnumerable<object> GetActives(Type type = null);
    //object GetSingle(object id);
    //IEnumerable<object> GetAll();
    //IEnumerable<object> GetActives();
  }

  public interface IGenericRepositoryReadByName
  {
    //object GetSingle(object id, string type = null);
    //IEnumerable<object> GetAll(string typeName = null);
    //IEnumerable<object> GetActives(string typeName = null);
  }

  public interface IGenericRepositoryWriteDefault
  {
    void Add<T>(T entidade) where T : class;
    void Update<T>(T entidade) where T : class, IDefaultModel;
    //void DeepUpdate<T>(T entidade) where T : class;
    void Delete<T>(string id, T entidadeReferencia) where T : class, IDefaultModel;
  }

  public interface IGenericRepositoryWriteByParam
  {
    //void Add(object entity, Type type = null);
    //void Update(object entity, Type type = null);
    //void DeepUpdate(object entity, Type type = null);
    //void Delete(object id, Type type = null);

    //void Add(object entity);
    //void Update(object entity);
    //void DeepUpdate(object entity);
    //void Delete(object id);
  }

  public interface IGenericRepositoryWriteByName
  {
    //void Add(object entity, string typeName = null);
    //void Update(object entity, string typeName = null);
    //void DeepUpdate(object entity, string typeName = null);
    //void Delete(object id, string typeName = null);
  }

  public interface IGenericRepositoryRead :
      IGenericRepositoryReadDefault,
      IGenericRepositoryReadByParam,
      IGenericRepositoryReadByName
  { }

  public interface IGenericRepositoryWrite :
      IGenericRepositoryWriteDefault,
      IGenericRepositoryWriteByParam,
      IGenericRepositoryWriteByName
  { }

  public interface IGenericRepository :
      IGenericRepositoryRead,
      IGenericRepositoryWrite
  { }
}
