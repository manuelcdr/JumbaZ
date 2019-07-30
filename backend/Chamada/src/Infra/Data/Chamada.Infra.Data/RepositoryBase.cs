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
      protected readonly IMongoDatabase MongoDB = MongoConfiguration.MongoDB;

      protected IMongoCollection<T> GetCollection<T>()
      {
         var collection = MongoDB.GetCollection<T>(Typer.CurrentTyperName);
         return collection;
      }

      protected IMongoCollection<T> GetCollection<T>(T entidadeReferencia)
      {
         var collection = GetCollection<T>();
         return collection;
      }

      protected FilterDefinition<T> GetFilterIdDefinition<T>(string id)
      {
         FilterDefinition<T> filter = $"{{_id: '{id}'}}";
         return filter;
      }

      protected FilterDefinition<T> GetFilterIdDefinition<T>(string id, T entidadeReferencia)
      {
         return GetFilterIdDefinition<T>(id);
      }

      protected FilterDefinition<T> GetFilterDefinition<T>(T entidadeReferencia, string filter = null)
      {
         if (string.IsNullOrEmpty(filter))
            return Builders<T>.Filter.Empty;

         return Builders<T>.Filter.Text(filter);
      }

      public RepositoryBase() { }

   }
}
