using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.IdGenerators;
using MongoDB.Driver;
using System.Linq;
using System.Security.Authentication;
using TyperCore;
using TyperCore.Configuration;

namespace Chamada.Infra.Data
{
    public class MongoConfiguration
    {
        public static IMongoDatabase MongoDB { get; private set; }

        public static void Initialize()
        {
            MongoClientSettings settings = MongoClientSettings.FromUrl(new MongoUrl(RepositorySettings.ConnectionString));
            settings.SslSettings = new SslSettings() { EnabledSslProtocols = SslProtocols.Tls12 };

            var mongoClient = new MongoClient(settings);
            MongoConfiguration.MongoDB = mongoClient.GetDatabase(RepositorySettings.DataBaseName);

            MongoConfiguration.Map();
        }

        private static void Map()
        {
            if (BsonClassMap.GetRegisteredClassMaps().Any())
                return;

            foreach (var type in TyperConfigurarion.Typers)
            {
                var map = new BsonClassMap(type);
                map.AutoMap();
                map.SetIsRootClass(true);   

                //map.
                //map.IdMemberMap.SetIdGenerator(BsonObjectIdGenerator.Instance);
                //map.IdMemberMap.SetIdGenerator()
                BsonClassMap.RegisterClassMap(map);

                //type.Assembly.GetTypes()
                //    .Where(type => featureType.IsAssignableFrom(type)).ToList()
                //    .ForEach(type => cm.AddKnownType(type));

            }
        }
    }
}
