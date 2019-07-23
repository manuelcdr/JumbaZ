using Chamada.Domain.Abstractions.Entities;
using Chamada.Domain.Abstractions.Repositories;
using MongoDB.Bson;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using TyperCore;

namespace Chamada.Infra.Data
{
  public class GenericRepository : RepositoryBase, IGenericRepository
  {
    public GenericRepository() : base() { }

    #region privates

    private IMongoCollection<T> GetCollection<T>()
    {
      var collection = MongoDB.GetCollection<T>(Typer.CurrentTyperName);
      return collection;
    }

    private FilterDefinition<T> GetFilterIdDefinition<T>(string id)
    {
      FilterDefinition<T> filter = $"{{_id: '{id}'}}";
      return filter;
    }

    #endregion

    public void Add<T>(T entidade) where T : class
    {
      GetCollection<T>().InsertOne(entidade);
    }

    public IEnumerable<T> Search<T>(Expression<Func<T, bool>> predicate) where T : class
    {
      return GetCollection<T>().Find(predicate).ToEnumerable();
    }

    public void Update<T>(T entidade) where T : class, IDefaultModel
    {
      GetCollection<T>().FindOneAndReplace<T>(GetFilterIdDefinition<T>(entidade.Id), entidade);
    }

    public T GetSingle<T>(string id, T entidadeReferencia) where T : class, IDefaultModel
    {
      return GetCollection<T>().Find(GetFilterIdDefinition<T>(id)).FirstOrDefault();
    }

    public IEnumerable<T> GetAll<T>(T entidadeReferencia) where T : class
    {
      return GetCollection<T>().Find(_ => true).ToEnumerable();
    }

    public IEnumerable<T> GetActives<T>(T entidadeReferencia) where T : class, IDeactivated
    {
      return GetCollection<T>().Find(x => x.Active).ToEnumerable();
    }

    public void Delete<T>(string id, T entidadeReferencia) where T : class, IDefaultModel
    {
      GetCollection<T>().FindOneAndDelete(GetFilterIdDefinition<T>(id));
    }
  }
}
