using Chamada.Infra.Data;
using Microsoft.Extensions.Configuration;
using Microsoft.Extensions.DependencyInjection;
using TyperCore.Configuration;

namespace Chamada.Services.Api.Configurations
{
    public static class AppSettingsConfiguration
    {
        public static void AddSettings(this IServiceCollection service, IConfiguration config)
        {
            var repositorySettings = new RepositorySettings();
            config.Bind("RepositorySettings", repositorySettings);

            var repositorySettingsSqlServer = new RepositorySettings();
            config.Bind("RepositorySettingsSqlServer", repositorySettingsSqlServer);

            var typerSettings = new TyperSettings();
            config.Bind("TyperSettings", typerSettings);
        }
    }
}
