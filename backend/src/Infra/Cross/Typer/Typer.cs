using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;
using TyperCore.Attributes;
using TyperCore.Configuration;
using TyperCore.Extensions;

namespace TyperCore
{
    public class Typer
    {

        public string CurrentTyperName { get; private set; }
        public Type CurrentTyper { get; private set; }

        public object GetObjectReference() => CurrentTyper.CreateInstance();

        public void SetCurrentTyper(Type typer)
        {
            CurrentTyper = typer;
            SetCurrentTyperName(typer);
        }

        private void SetCurrentTyperName(Type typer)
        {
            CurrentTyperName = typer?.Name.ToLower();
        }

        public static IEnumerable<Type> GetRefTypers(string key)
        {
            var refSettings = TyperSettings.GetReference(key);

            var types = Assembly.Load(refSettings.AssemblyName).GetTypes()
                .Where(x => x.Namespace == refSettings.Namespace);

            return types;
        }

        public Type GetRefTyper(string key, Type typer = null, TyperAction action = TyperAction.None)
        {
            typer = typer ?? CurrentTyper;

            if (typer == null)
                return null;

            SetCurrentTyper(typer);

            var listTypeName = CurrentTyperName + action.ToString();

            if (TyperConfigurarion.ListedRefTypers[key].ContainsKey(listTypeName))
                return TyperConfigurarion.ListedRefTypers[key].GetValueOrDefault(listTypeName);

            var refTyper = GetRefTypers(key).FindRefTypers(typer, action);

            TyperConfigurarion.ListedRefTypers[key].Add(listTypeName, refTyper);
            return refTyper;
        }

        public Type GetRefTyper(string key, string typerName = null, TyperAction action = TyperAction.None)
        {
            typerName = typerName?.ToLower() ?? CurrentTyperName;

            if (typerName == null)
                return null;

            var typer = GetTyper(typerName);

            return GetRefTyper(key, typer, action);
        }

        public Type GetRefTyper(string key, TyperAction action = TyperAction.None)
        {
            return GetRefTyper(key, CurrentTyper, action);
        }

        public static MethodInfo GetActionMethod(Type refType, TyperAction action)
        {
            return refType.GetActionMethod(action);
        }

        public static object InoveActionMethod(Type refType, TyperAction action, params object[] objects)
        {
            return refType.InvokeActionMethod(action, objects);
        }

        public Type GetTyper(string typerName = null)
        {
            typerName = typerName?.ToLower() ?? CurrentTyperName;

            if (typerName == null)
                return null;

            if (TyperConfigurarion.ListedTypers.ContainsKey(typerName))
                return TyperConfigurarion.ListedTypers.GetValueOrDefault(typerName);

            var type = TyperConfigurarion.Typers.FindTyper(typerName);

            TyperConfigurarion.ListedTypers.Add(typerName, type);

            return type;
        }

        public bool TrySetCurrentTyper(string typerName)
        {
            var typer = GetTyper(typerName);

            if (typer == null)
                return false;

            SetCurrentTyper(typer);

            return true;
        }
    }
}
