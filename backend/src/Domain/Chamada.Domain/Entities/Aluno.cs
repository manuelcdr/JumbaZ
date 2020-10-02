using Chamada.Domain.Abstractions.Entities;
using MongoDB.Bson;
using MongoDB.Bson.Serialization.Attributes;

namespace Chamada.Domain.Entities
{
   public class Aluno : DefaultDeactivatedModel
   {
      public Aluno() : base()
      {
         Activate();
      }

      [BsonRepresentation(BsonType.ObjectId)]
      public string TurmaId { get; set; }
      public string Nome { get; set; }
      public string Apelido { get; set; }
      public Sexo Sexo { get; set; }
   }

   public enum Sexo
   {
      Masculino,
      Feminino
   }
}
