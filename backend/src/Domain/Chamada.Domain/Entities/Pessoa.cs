using Chamada.Domain.Abstractions.Entities;

namespace Chamada.Domain.Entities
{
  public class Pessoa : DefaultEntity
    {
        public string Nome { get; set; }
        public string Sobrenome { get; set; }
        public string Sexo { get; set; }
        public string Profissao { get; set; }
    }
}
