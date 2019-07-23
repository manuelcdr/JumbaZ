using System.Collections.Generic;
using TyperCore.Abstractions;

namespace TyperCore.Configuration
{
  public class TyperSettings
  {
    public static string AssemblyName { get; set; }
    public static  string Namespace { get; set; }

    private static Dictionary<string, RefTyperConfig> _references = new Dictionary<string, RefTyperConfig>();

    public static RefTyperConfigDictionary[] References {
      get { return null; }
      set
      {
        foreach(var _ref in value)
          _references.Add(_ref.Key, _ref.Value);
      }
    }

    public static Dictionary<string, RefTyperConfig> GetReferences()
    {
      return _references;
    }

    public static RefTyperConfig GetReference(string key)
    {
      return _references[key];
    }
  }

  public class RefTyperConfig : ITyperConfig
  {
    public string AssemblyName { get; set; }
    public string Namespace { get; set; }
  }

  public class RefTyperConfigDictionary
  {
    public string Key { get; set; }
    public RefTyperConfig Value { get; set; }
  }
}
