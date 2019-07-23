using System;
using System.Linq;
using System.Reflection;

namespace TyperCore.Helpers
{
  public class MethodInvoker
  {
    public static object InvokeGenericMethod(object objCaller, string methodName, Type[] genericTypes, bool @private = false, params object[] parameters)
    {
      var bindingFlags = @private ? BindingFlags.NonPublic | BindingFlags.Instance | BindingFlags.InvokeMethod : BindingFlags.Public | BindingFlags.InvokeMethod;
      var types = parameters?.Select(x => x.GetType()).ToArray() ?? Type.EmptyTypes;
      //var method = objCaller.GetType().GetMethod(methodName, bindingFlags, null, types, null);
      var method = objCaller.GetType().GetMethods(bindingFlags).Where(x => x.IsGenericMethod).FirstOrDefault();
      var genericMethod = method.MakeGenericMethod(genericTypes);

      var objReturn = genericMethod.Invoke(objCaller, parameters);
      return objReturn;
    }

    public static object InvokeMethod(object objCaller, string methodName, bool @private = false, params object[] parameters)
    {
      var types = parameters?.Select(x => x.GetType()).ToArray() ?? Type.EmptyTypes;
      var method = objCaller.GetType().GetMethod(methodName, types);

      return method.Invoke(objCaller, parameters);
    }
  }
}
