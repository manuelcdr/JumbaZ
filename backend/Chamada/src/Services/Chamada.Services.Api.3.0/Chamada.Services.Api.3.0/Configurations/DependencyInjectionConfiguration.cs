using AutoMapper;
using Chamada.Infra.Cross.IoC;
using Microsoft.Extensions.DependencyInjection;

namespace Chamada.Services.Api30.Configurations
{
    public static class DependencyInjectionConfiguration
    {
        public static void AddDIConfiguration(this IServiceCollection services)
        {
            // mapper
            var config = new MapperConfiguration(config =>
            {
                config.AllowNullCollections = true;
                config.AddProfile<AutoMapperProfile>();
            });

            services.AddAutoMapper(typeof(AutoMapperProfile));


            // registrar serviços de outras camadas
            NativeInjectorBootStrapper.RegisterServices(services);
        }
    }
}
