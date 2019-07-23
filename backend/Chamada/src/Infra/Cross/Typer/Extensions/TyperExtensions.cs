using System;
using System.Collections.Generic;
using System.Reflection;
using TyperCore.Abstractions;
using TyperCore.Attributes;

namespace TyperCore.Extensions
{
  public static class TyperExtensions
    {
        public static Type GetRefTyper(this ITyperEntity entity, string key, TyperAction action = TyperAction.None)
        {
            return Typer.GetRefTyper(key, entity.GetType(), action);
        }

        public static Object GetRefObj(this ITyperEntity domainObj, string key, TyperAction action = TyperAction.None)
        {
            var refType = domainObj.GetRefTyper(key, action);

            if (refType == null)
                return null;

            return refType.CreateInstance();
        }

        public static MethodInfo GetActionMethod(this ITyperRef objRef, TyperAction action)
        {
            return objRef.GetType().GetActionMethod(action);
        }

        public static object InvokeActionMethod(this ITyperRef objRef, TyperAction action, params object[] objects)
        {
            var method = objRef.GetActionMethod(action);

            if (method == null)
                return null;

            return method.Invoke(objRef, objects);
        }

        public static IEnumerable<Type> GetTypers(this ITyperRef refObj)
        {
            return refObj.GetType().GetTypers();
        }

        public static TyperAction GetAcceptTyperActions(this ITyperRef refObj)
        {
            return refObj.GetType().GetAcceptTyperActions();
        }
    }
}
