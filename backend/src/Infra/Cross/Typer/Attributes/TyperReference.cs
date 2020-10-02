using System;
using System.Collections.Generic;

namespace TyperCore.Attributes
{
    public class TyperReferenceAttribute : Attribute
    {
        private List<Type> _domainTypes = new List<Type>();
        public IEnumerable<Type> DomainTypes => _domainTypes.ToArray();

        public TyperReferenceAttribute(params Type[] domainType)
        {
            _domainTypes.AddRange(domainType);
        }

        public bool HasTyper(Type domainType)
        {
            return _domainTypes.Contains(domainType);
        }
    }
}
