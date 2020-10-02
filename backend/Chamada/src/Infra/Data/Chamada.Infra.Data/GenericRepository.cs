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
        private readonly Typer _typer;

        public GenericRepository(Typer typer) : base()
        {
            _typer = typer;
        }

        public T Add<T>(T entidade) where T : class, IDefaultModel
      {
         entidade.SetId(ObjectId.GenerateNewId().ToString());
         GetCollection<T>().InsertOne(entidade);
         return entidade;
      }

      public IEnumerable<T> Search<T>(Expression<Func<T, bool>> predicate) where T : class, IDefaultModel
      {
         return GetCollection<T>().Find(predicate).ToEnumerable();
      }

      public IEnumerable<object> Search(string filter)
      {
         var filterDefinition = GetFilterDefinition(_typer.GetObjectReference(), filter);
         return GetCollection(_typer.GetObjectReference()).Find(filterDefinition).ToEnumerable();
      }

      public T Update<T>(T entidade) where T : class, IDefaultModel
      {
         GetCollection<T>().FindOneAndReplace<T>(GetFilterIdDefinition<T>(entidade.Id), entidade);
         return entidade;
      }

      public object GetSingle(string id)
      {
         var filter = GetFilterIdDefinition(id, _typer.GetObjectReference());
         return GetCollection(_typer.GetObjectReference()).Find(filter).FirstOrDefault();
      }

      public IEnumerable<object> GetAll<T>(T objRef) where T : class, IDefaultModel
      {
         var filter = GetFilterDefinition(_typer.GetObjectReference());
         return GetCollection(_typer.GetObjectReference()).Find(filter).ToEnumerable();
      }

      public IEnumerable<object> GetActives<T>(T objectReference = null) where T : class, IDeactivated
      {
         return GetCollection(_typer.GetObjectReference()).Find("{Active: true}").ToEnumerable();
      }

      public object Delete(string id)
      {
         var filter = GetFilterIdDefinition(id, _typer.GetObjectReference());
         var objeto = GetCollection(_typer.GetObjectReference()).FindOneAndDelete(filter);
         return objeto;
      }

        public IEnumerable<object> GetAll()
        {
            var collection = GetCollection(_typer.CurrentTyper);
            var result = collection.Find(GetFilterDefinition(_typer.CurrentTyper)).ToEnumerable();
            return result;
        }

        public IEnumerable<object> GetActives()
        {
            throw new NotImplementedException();
        }

        IEnumerable<object> IGenericRepositoryRead.GetAll<T>()
        {
            throw new NotImplementedException();
        }

        IEnumerable<object> IGenericRepositoryRead.GetActives<T>()
        {
            throw new NotImplementedException();
        }

        public object Delete(string id, Type _type = null)
        {
            throw new NotImplementedException();
        }
    }
}
