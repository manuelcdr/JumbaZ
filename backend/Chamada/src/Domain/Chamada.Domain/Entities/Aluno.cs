using Chamada.Domain.Abstractions.Entities;

namespace Chamada.Domain.Entities
{
   public class Aluno : DefaultDeactivatedModel
   {
      public Aluno() : base()
      {
         Activate();
      }

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
