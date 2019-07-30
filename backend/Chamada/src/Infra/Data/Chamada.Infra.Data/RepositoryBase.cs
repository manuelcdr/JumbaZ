using Chamada.Domain.Entities;
using MongoDB.Bson.Serialization;
using MongoDB.Bson.Serialization.IdGenerators;
using MongoDB.Driver;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Security.Authentication;
using System.Text;
using TyperCore;

namespace Chamada.Infra.Data
{
  public abstract class RepositoryBase
  {
    protected readonly IMongoDatabase MongoDB;

    public RepositoryBase()
    {
      MongoClientSettings settings = MongoClientSettings.FromUrl(new MongoUrl(RepositorySettings.ConnectionString));
      settings.SslSettings = new SslSettings() { EnabledSslProtocols = SslProtocols.Tls12 };

      var mongoClient = new MongoClient(settings);
      this.MongoDB = mongoClient.GetDatabase(RepositorySettings.DataBaseName);

      MapearClassesMongo();

    }

    private void MapearClassesMongo()
    {
      if (BsonClassMap.GetRegisteredClassMaps().Any())
        return;

      foreach (var type in Typer.Typers)
      {
        var map = new BsonClassMap(type);
        map.AutoMap();
        BsonClassMap.RegisterClassMap(map);
      }

    }

  }
}
