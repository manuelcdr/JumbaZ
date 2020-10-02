using System;
using System.Collections.Generic;
using System.Linq.Expressions;

namespace Chamada.Abstractions.Repositories
{
    public interface IRepositoryRead<T>
    {
        T ObterPorId(Guid id);
        IEnumerable<T> ObterTodos();
        IEnumerable<T> Buscar(Expression<Func<T, bool>> predicate);
    }
}
