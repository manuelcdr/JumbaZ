using Chamada.Infra.Data;
using Chamada.Infra.Data.SqlServer;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TyperCore.Configuration;

namespace Chamada.Services.Api30.Configurations
{
    public static class AppSettingsConfiguration
    {
        public static void AddSettings(this IConfiguration config)
        {
            var repositorySettings = new RepositorySettings();
            config.Bind("RepositorySettings", repositorySettings);

            var sqlServerSettings = new SqlServerSettings();
            config.Bind("SqlServerSettings", sqlServerSettings);

            var typerSettings = new TyperSettings();
            config.Bind("TyperSettings", typerSettings);
        }
    }
}
