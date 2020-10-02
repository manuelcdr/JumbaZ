using Microsoft.EntityFrameworkCore;
using Microsoft.JSInterop;
using System;
using System.Linq;
using System.Reflection;

namespace Chamada.Services.Api30.Data
{
    public static class DbContextExtensions
    {
        public static DbSet<T> SetByRef<T>(this DbContext context, T objRef) where T : class
        {
            // Get the generic type definition
            MethodInfo method = typeof(DbContext).GetMethod(nameof(DbContext.Set), BindingFlags.Public | BindingFlags.Instance);

            // Build a method with the specific type argument you're interested in

            method = method.MakeGenericMethod(objRef.GetType());

            return method.Invoke(context, null) as DbSet<T>;
        }
    }
}
