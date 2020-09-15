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

      public T Add<T>(T entidade) where T : class, IDefaultModel
      {
         entidade.SetId(ObjectId.GenerateNewId().ToString());
         GetCollection<T>().InsertOne(entidade);
         return entidade;
      }

      public IEnumerable<T> Search<T>(Expression<Func<T, bool>> predicate) where T : class
      {
         return GetCollection<T>().Find(predicate).ToEnumerable();
      }

      public IEnumerable<object> Search(string filter)
      {
         var filterDefinition = GetFilterDefinition(Typer.GetObjectReference(), filter);
         return GetCollection(Typer.GetObjectReference()).Find(filterDefinition).ToEnumerable();
      }

      public T Update<T>(T entidade) where T : class, IDefaultModel
      {
         GetCollection<T>().FindOneAndReplace<T>(GetFilterIdDefinition<T>(entidade.Id), entidade);
         return entidade;
      }

      public object GetSingle(string id)
      {
         var filter = GetFilterIdDefinition(id, Typer.GetObjectReference());
         return GetCollection(Typer.GetObjectReference()).Find(filter).FirstOrDefault();
      }

      public IEnumerable<object> GetAll()
      {
         var filter = GetFilterDefinition(Typer.GetObjectReference());
         return GetCollection(Typer.GetObjectReference()).Find(filter).ToEnumerable();
      }

      public IEnumerable<object> GetActives()
      {
         return GetCollection(Typer.GetObjectReference()).Find("{Active: true}").ToEnumerable();
      }

      public object Delete(string id)
      {
         var filter = GetFilterIdDefinition(id, Typer.GetObjectReference());
         var objeto = GetCollection(Typer.GetObjectReference()).FindOneAndDelete(filter);
         return objeto;
      }
   }
}
