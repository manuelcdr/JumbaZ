using Chamada.Abstractions.Services;
using Chamada.Domain.Abstractions.Repositories;
using Chamada.Domain.Services;
using Chamada.Domain.Validations;
using Chamada.Infra.Cross.Helpers;
using Chamada.Infra.Data;
using Chamada.Infra.Data.SqlServer;
using Microsoft.AspNetCore.Http;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.DependencyInjection;

namespace Chamada.Infra.Cross.IoC
{
    public class NativeInjectorBootStrapper
    {
        public static void RegisterServices(IServiceCollection services)
        {
            // ASPNET
            services.AddScoped<IHttpContextAccessor, HttpContextAccessor>();
            services.AddScoped<ServiceBuilder>();
            //services.AddSingleton<MapperConfiguration>(); // mudei 
            //services.AddSingleton(MongoConfiguration.MongoDB);
            //services.AddScoped<IMapper>(sp => new Mapper(sp.GetRequiredService<IConfigurationProvider>(), sp.GetService));


            // Contexts
            services.AddDbContext<SqlServerContext>(opt => opt.UseSqlServer(""));
            services.AddScoped<DbContext, SqlServerContext>();


            // Services
            services.AddScoped<IGenericDomainService, GenericDomainService>();

            // Validations
            services.AddScoped<TurmaUpInsertValidation>();

            // Repositories
            services.AddScoped<IGenericRepository, GenericRepository>();
            services.AddScoped<IGenericRepositoryRead, GenericRepository>();

            // Infra - Identity
            //services.AddTransient<IEmailSender, EmailSender>();
            //services.AddScoped<IUser, AspNetUser>();
        }
    }
}
