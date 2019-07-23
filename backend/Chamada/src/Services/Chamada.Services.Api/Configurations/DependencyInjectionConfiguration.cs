using AutoMapper;
using Chamada.Infra.Cross.IoC;
using Microsoft.Extensions.DependencyInjection;

namespace Chamada.Services.Api.Configurations
{
  public static class DependencyInjectionConfiguration
  {
    public static void AddDIConfiguration(this IServiceCollection services)
    {
      Mapper.Initialize(config =>
      {
        config.AddProfile<AutoMapperProfile>();
      });

      services.AddAutoMapper(typeof(AutoMapperProfile));

      NativeInjectorBootStrapper.RegisterServices(services);
    }
  }
}
