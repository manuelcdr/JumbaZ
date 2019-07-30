using System;
using System.Collections.Generic;
using System.Text;

namespace Chamada.Domain.Abstractions.Validations
{
   public interface IValidator
   {
      bool Run<T>(T entity) where T : class;
   }
}
