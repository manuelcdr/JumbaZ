using System;
using System.Collections.Generic;
using System.Text;

namespace TyperCore.Abstractions
{
  public interface ITyperConfig
  {
    string AssemblyName { get; set; }
    string Namespace { get; set; }
  }
}
