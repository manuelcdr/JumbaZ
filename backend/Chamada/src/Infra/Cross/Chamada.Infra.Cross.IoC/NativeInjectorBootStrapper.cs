using AutoMapper;
using Chamada.Abstractions.Services;
using Chamada.Domain.Abstractions.Repositories;
using Chamada.Domain.Services;
using Chamada.Infra.Data;
using Microsoft.AspNetCore.Http;
using Microsoft.Extensions.DependencyInjection;
using TyperCore;

namespace Chamada.Infra.Cross.IoC
{
  public class NativeInjectorBootStrapper
  {
    public static void RegisterServices(IServiceCollection services)
    {
      // ASPNET
      services.AddSingleton<IHttpContextAccessor, HttpContextAccessor>();
      services.AddSingleton(Mapper.Configuration);
      services.AddScoped<IMapper>(sp => new Mapper(sp.GetRequiredService<IConfigurationProvider>(), sp.GetService));
      services.AddScoped<IGenericDomainService, GenericService>();
      // Contexts
      //services.AddScoped<DefaultContext>();

      // Repositorios de Juridico
      //services.AddScoped<IUnitOfWork, UnitOfWork>();
      services.AddScoped<IGenericRepository, GenericRepository>();
      services.AddScoped<IGenericRepositoryRead, GenericRepository>();

      // Infra - Identity
      //services.AddTransient<IEmailSender, EmailSender>();
      //services.AddScoped<IUser, AspNetUser>();
    }
  }
}
