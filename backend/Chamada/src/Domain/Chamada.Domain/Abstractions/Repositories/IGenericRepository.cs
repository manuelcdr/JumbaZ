using Chamada.Domain.Abstractions.Entities;
using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Chamada.Domain.Abstractions.Repositories
{
   public interface IGenericRepositoryRead
   {
      object GetSingle(string id);
      IEnumerable<object> GetAll();
      IEnumerable<object> GetActives();
      IEnumerable<T> Search<T>(Expression<Func<T, bool>> predicate) where T : class;
      IEnumerable<object> Search(string filter);
   }

   public interface IGenericRepositoryWrite
   {
      void Add<T>(T entidade) where T : class;
      void Update<T>(T entidade) where T : class, IDefaultModel;
      void Delete(string id);
   }

   public interface IGenericRepository :
       IGenericRepositoryRead,
       IGenericRepositoryWrite
   { }
}
