using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.Primitives;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Reflection;

namespace TyperCore.Configuration
{
    public class TyperConfigurarion : IConfigurationProvider
    {
        public static Dictionary<string, Type> ListedTypers = new Dictionary<string, Type>();
        public static Dictionary<string, Dictionary<string, Type>> ListedRefTypers = new Dictionary<string, Dictionary<string, Type>>();
        public static IEnumerable<Type> Typers = new List<Type>();
        private IConfiguration _root { get; set; }
        public string Namespace { get; set; }
        public string AssemblyName { get; set; }

        public TyperConfigurarion(IConfigurationSection section)
        {
            _root = section;
            Load();
        }

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


        public IEnumerable<string> GetChildKeys(IEnumerable<string> earlierKeys, string parentPath)
        {
            var sectionParentPath = _root.GetSection(parentPath);
            var childs = new List<string>();

            foreach (var child in earlierKeys)
                childs.AddRange(sectionParentPath.GetChildren().Select(x => x.Key));

            return childs;
        }

        public IChangeToken GetReloadToken()
        {
            return _root.GetReloadToken();
        }

        public void Load()
        {
            if (TryGet("Assembly", out string assembly_))
                AssemblyName = assembly_;

            if (TryGet("Namespace", out string namespace_))
                Namespace = namespace_;
        }

        public void Set(string key, string value)
        {
            var section = _root.GetSection(key);
            section.Value = value;
        }

        public bool TryGet(string key, out string value)
        {
            var section = _root.GetSection(key);
            value = section.Value;
            return !String.IsNullOrEmpty(section.Value);
        }
    }

}
