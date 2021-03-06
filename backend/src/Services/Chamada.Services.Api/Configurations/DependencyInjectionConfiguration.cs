using AutoMapper;
using Chamada.Infra.Cross.IoC;
using Microsoft.Extensions.DependencyInjection;

namespace Chamada.Services.Api.Configurations
{
    public static class DependencyInjectionConfiguration
    {
        public static void AddDIConfiguration(this IServiceCollection services)
        {
            var config = new MapperConfiguration(config =>
            {
                config.AddProfile<AutoMapperProfile>();
            });

            services.AddAutoMapper(typeof(AutoMapperProfile));

            NativeInjectorBootStrapper.RegisterServices(services);
        }
    }
}
