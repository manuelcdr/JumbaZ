using Chamada.Domain.Abstractions.Entities;
using Chamada.Domain.Abstractions.Repositories.SqlServer;
using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Linq.Expressions;
using System.Reflection;
using TyperCore;
using TyperCore.Helpers;

namespace Chamada.Services.Api30.Data
{
    public class SqlServerGenericRepository : SqlServerRepositoryBase
    {
        private readonly Typer typer;

        public SqlServerGenericRepository(DataContext context, Typer typer) : base(context)
        {
            this.typer = typer;
        }

        private DbSet<T> GetContextSet<T>(T objectReference) where T : class
        {
            return Context.Set<T>();
        }

        public object Delete(Guid id)
        {
            var _object = Context.Find(typer.CurrentTyper, id);
            Context.Remove(_object);
            return _object;
        }

        public object GetSingle(Guid id)
        {
            var _object = Context.Find(typer.CurrentTyper, id);
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

        public IEnumerable<T> AddRange<T>(IEnumerable<T> entidades) where T : class
        {
            Context.AddRange(entidades);
            return entidades;
        }

        public T Update<T>(T entidade) where T : class
        {
            Context.Update(entidade);
            return entidade;
        }

        public IEnumerable<object> GetActives()
        {
            return GetContextSet(typer.GetObjectReference() as IDeactivated).Where(x => x.Active);
        }

        public IEnumerable<object> GetAll()
        {
            var dbSet = MethodInvoker.InvokeGenericMethod(Context, "Set", new Type[] { typer.CurrentTyper }) as DbSet<object>;
            return dbSet.AsNoTracking();
        }

    }
}
