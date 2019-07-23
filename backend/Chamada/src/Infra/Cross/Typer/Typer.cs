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
    //private static Dictionary<string, TyperConfigurarion> ReferencesConfigurations = new Dictionary<string, TyperConfigurarion>();
    private static Dictionary<string, Type> ListedTypers = new Dictionary<string, Type>();
    public static Dictionary<string, Dictionary<string, Type>> ListedRefTypers = new Dictionary<string, Dictionary<string, Type>>();
    public static IEnumerable<Type> Typers = new List<Type>();

    public static string CurrentTyperName { get; private set; }
    public static Type CurrentTyper { get; private set; }

    public static object GetObjectReference() => CurrentTyper.CreateInstance();

    public static void Initialize()
    {
      Typers =
        Assembly
        .Load(TyperSettings.AssemblyName)
        .GetTypes()
        .Where(x => x.Namespace == TyperSettings.Namespace);

      foreach (var refKey in TyperSettings.GetReferences().Keys)
        ListedRefTypers.Add(refKey, new Dictionary<string, Type>());

    }

    private static void SetCurrentTyper(Type typer)
    {
      CurrentTyper = typer;
      SetCurrentTyperName(typer);
    }

    private static void SetCurrentTyperName(Type typer)
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

    public static Type GetRefTyper(string key, Type typer = null, TyperAction action = TyperAction.None)
    {
      typer = typer ?? CurrentTyper;

      if (typer == null)
        return null;

      SetCurrentTyper(typer);

      var listTypeName = CurrentTyperName + action.ToString();

      if (ListedRefTypers[key].ContainsKey(listTypeName))
        return ListedRefTypers[key].GetValueOrDefault(listTypeName);

      var refTyper = GetRefTypers(key).FindRefTypers(typer, action);

      ListedRefTypers[key].Add(listTypeName, refTyper);
      return refTyper;
    }

    public static Type GetRefTyper(string key, string typerName = null, TyperAction action = TyperAction.None)
    {
      typerName = typerName?.ToLower() ?? CurrentTyperName;

      if (typerName == null)
        return null;

      var typer = GetTyper(typerName);

      return GetRefTyper(key, typer, action);
    }

    public static Type GetRefTyper(string key, TyperAction action = TyperAction.None)
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

    public static Type GetTyper(string typerName = null)
    {
      typerName = typerName?.ToLower() ?? CurrentTyperName;

      if (typerName == null)
        return null;

      if (ListedTypers.ContainsKey(typerName))
        return ListedTypers.GetValueOrDefault(typerName);

      var type = Typers.FindTyper(typerName);

      ListedTypers.Add(typerName, type);

      return type;
    }

    public static bool TrySetCurrentTyper(string typerName)
    {
      var typer = GetTyper(typerName);

      if (typer == null)
        return false;

      SetCurrentTyper(typer);

      return true;
    }
  }
}
