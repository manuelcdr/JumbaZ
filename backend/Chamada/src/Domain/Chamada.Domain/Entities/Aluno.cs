using Chamada.Domain.Abstractions.Entities;

namespace Chamada.Domain.Entities
{
  public class Aluno : DefaultDeactivatedModel, IDeactivated
  {
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
