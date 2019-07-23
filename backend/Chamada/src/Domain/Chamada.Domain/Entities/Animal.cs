using Chamada.Domain.Abstractions.Entities;

namespace Chamada.Domain.Entities
{
  public class Animal : DefaultEntity
    {
        public string Nome { get; set; }
        public string Tipo { get; set; }
    }
}
