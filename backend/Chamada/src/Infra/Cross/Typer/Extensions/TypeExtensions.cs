using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using TyperCore.Abstractions;
using TyperCore.Attributes;

namespace TyperCore.Extensions
{
  public static class TypeExtensions
    {
        public static Type FindTyper(this IEnumerable<Type> types, string typeName)
        {
            var type = types.SingleOrDefault(t => t.Name.ToLower() == typeName.ToLower());
            return type;
        }

        public static Type FindTyperStartsWith(this IEnumerable<Type> types, string typeName)
        {
            var type = types.SingleOrDefault(t => t.Name.ToLower().StartsWith(typeName.ToLower()));
            return type;
        }

        public static Type FindTyperWith(this IEnumerable<Type> types, string typeName)
        {
            var type = types.SingleOrDefault(t => t.Name.ToLower().Contains(typeName.ToLower()));
            return type;
        }

        public static Type FindRefTypers(this IEnumerable<Type> types, Type domainType, TyperAction action = TyperAction.None)
        {
            var likeTypes = types
                .Where(t => t.GetCustomAttribute<TyperReferenceAttribute>() != null);

            foreach (var type in likeTypes)
            {
                if (!type.HasTyper(domainType))
                    continue;

                if (action == TyperAction.None || type.AcceptTyperAction(action))
                    return type;
            }

            return null;
        }

        public static IEnumerable<Type> GetTypers(this Type type)
        {
            var attribute = type.GetCustomAttribute<TyperReferenceAttribute>(false);
            if (attribute == null)
                return null;

            return attribute.DomainTypes;
        }

        public static bool HasTyper(this Type refType, Type domainType)
        {
            var attribute = refType.GetCustomAttribute<TyperReferenceAttribute>(false);
            if (attribute == null)
                return false;

            return attribute.HasTyper(domainType);
        }

        public static bool AcceptTyperAction(this Type type, TyperAction action)
        {
            var attribute = type.GetCustomAttribute<AcceptTyperActionsAttribute>(false);

            if (attribute == null && action == TyperAction.None)
                return true;

            return attribute != null && attribute.Actions.HasFlag(action);
        }

        public static MethodInfo GetActionMethod(this Type refType, TyperAction action)
        {
            var methods = refType.GetMethods();
            foreach(var method in methods)
            {
                var attribute = method.GetCustomAttribute<AcceptTyperActionsAttribute>(false);
                if (attribute == null)
                    continue;

                if (attribute.Actions.HasFlag(action))
                    return method;
            }
            return null;
        }

        public static PropertyInfo GetPropertyReference(this Type sourceType, Type refType)
        {
            var props = sourceType.GetProperties();
            foreach (var prop in props)
            {
                var attribute = prop.GetCustomAttribute<TyperReferenceAttribute>(false);
                if (attribute == null)
                    continue;

                if (attribute.HasTyper(refType))
                    return prop;
            }
            return null;
        }

        public static object InvokeActionMethod(this Type refType, TyperAction action, params object[] @params)
        {
            var objRef = refType.CreateInstance() as ITyperRef;
            return objRef.InvokeActionMethod(action, @params);
        }    

        public static Object CreateInstance(this Type type, params object[] @params)
        {
            return Activator.CreateInstance(type, @params);
        }

        public static TyperAction GetAcceptTyperActions(this Type type)
        {
            var attribute = type.GetCustomAttribute<AcceptTyperActionsAttribute>(false);
            if (attribute == null)
                return TyperAction.None;

            return attribute.Actions;
        }
    }
}
