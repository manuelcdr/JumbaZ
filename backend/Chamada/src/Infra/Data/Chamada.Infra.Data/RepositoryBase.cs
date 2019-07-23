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
    //protected readonly IControlador ControladorDeNotificacoes;
    //protected readonly FbConnection FireBird;
    protected readonly IMongoDatabase MongoDB;

    public RepositoryBase()
    {
      // Controlador
      //this.ControladorDeNotificacoes = controladorDeNotificacoes;

      // Start Mongo
      MongoClientSettings settings = MongoClientSettings.FromUrl(new MongoUrl(RepositorySettings.ConnectionString));
      settings.SslSettings = new SslSettings() { EnabledSslProtocols = SslProtocols.Tls12 };

      var mongoClient = new MongoClient(settings);
      this.MongoDB = mongoClient.GetDatabase(RepositorySettings.DataBaseName);

      MapearClassesMongo();


      // Start FireBird
      //FireBird = new FbConnection(AppSettings.ConnectionStrings.ERP);
    }

    private void MapearClassesMongo()
    {
      if (BsonClassMap.GetRegisteredClassMaps().Any())
        return;

      //BsonClassMap.RegisterClassMap()

      //BsonClassMap.RegisterClassMap<Aluno>(cm =>
      //{
      //  cm.AutoMap();
      //});

      foreach (var type in Typer.Typers)
      {
        var map = new BsonClassMap(type);
        map.AutoMap();
        BsonClassMap.RegisterClassMap(map);
      }

    }
    //{
    //  if (BsonClassMap.GetRegisteredClassMaps().Any())
    //    return;

    //  BsonClassMap.RegisterClassMap<Cache>(cm =>
    //  {
    //    cm.AutoMap();
    //    cm.SetIgnoreExtraElements(true);
    //  });

    //  BsonClassMap.RegisterClassMap<Boletim>(cm =>
    //  {
    //    cm.AutoMap();
    //    cm.MapIdMember(c => c.Id).SetIdGenerator(StringObjectIdGenerator.Instance);
    //  });

    //  BsonClassMap.RegisterClassMap<UsuarioAcessos>(cm =>
    //  {
    //    cm.AutoMap();
    //    cm.MapIdMember(c => c.UsuarioId);
    //  });

    //  BsonClassMap.RegisterClassMap<UsuarioRelacionamentos>(cm =>
    //  {
    //    cm.AutoMap();
    //    cm.MapIdMember(c => c.UsuarioId);
    //  });

    //  BsonClassMap.RegisterClassMap<PedidoMongo>(cm =>
    //  {
    //    cm.AutoMap();
    //    cm.MapIdMember(c => c.PedidoId);
    //  });

    //  BsonClassMap.RegisterClassMap<Ficha>(cm =>
    //  {
    //    cm.AutoMap();
    //    cm.MapIdMember(c => c.Id);
    //  });
    //}
  }
}
