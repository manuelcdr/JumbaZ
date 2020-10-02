using Chamada.Domain.Abstractions.Entities;
using Chamada.Domain.Abstractions.Repositories.SqlServer;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using TyperCore;

namespace Chamada.Infra.Data.SqlServer
{
    public class SqlServerGenericRepository : SqlServerRepositoryBase, IGenericRepositorySqlServer
    {
        private readonly Typer _typer;

        public SqlServerGenericRepository(SqlServerContext context, Typer typer) : base(context)
        {
            this._typer = typer;
        }

        private DbSet<T> GetContextSet<T>(T objectReference) where T : class
        {
            return Context.Set<T>();
        }

        public object Delete(string id)
        {
            var _object = Context.Find(_typer.CurrentTyper, id);
            Context.Remove(_object);
            return _object;
        }

        public object GetSingle(string id)
        {
            var _object = Context.Find(_typer.CurrentTyper, id);
            return _object;
        }

        public IEnumerable<T> Search<T>(Expression<Func<T, bool>> predicate) where T : class
        {
            return Context.Set<T>().Where(predicate);
        }

        public T Add<T>(T entidade) where T : class
        {
            Context.Add(entidade);
            return entidade;
        }

        public T Update<T>(T entidade) where T : class
        {
            Context.Update(entidade);
            return entidade;
        }

        public IEnumerable<object> GetActives()
        {
            return GetContextSet(_typer.GetObjectReference() as IDeactivated).Where(x => x.Active);
        }

        public IEnumerable<object> GetAll()
        {
            return GetContextSet(_typer.GetObjectReference()).ToList();
        }
    }
}
