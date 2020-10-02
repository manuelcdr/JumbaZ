using Microsoft.AspNetCore.Http;
using System;

namespace Chamada.Infra.Cross.Helpers
{
   public class ServiceBuilder
   {
      private readonly IHttpContextAccessor acessor;

      public ServiceBuilder(IHttpContextAccessor acessor)
      {
         this.acessor = acessor;
      }

      public object GetService(Type type)
      {
         return acessor.HttpContext.RequestServices.GetService(type);
      }
   }
}
