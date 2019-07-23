using Chamada.Domain.Abstractions.Entities;
using System;

namespace Chamada.Domain.Entities
{
  public class Fruta : DefaultModel
    {
        public Fruta() : base() { }

        public Fruta(string id, string nome, string tipo)
            :base(id)
        {
            Nome = nome;
            Tipo = tipo;
        }

        public string Nome { get; set; }
        public string Tipo { get; set; }
    }
}
