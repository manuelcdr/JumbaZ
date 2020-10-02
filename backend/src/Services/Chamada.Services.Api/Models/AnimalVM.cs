using Chamada.Domain.Entities;
using System;
using System.ComponentModel.DataAnnotations;
using TyperCore.Attributes;

namespace Chamada.Services.Api.Models
{
  [TyperReference(typeof(Animal))]
    [AcceptTyperActions(TyperAction.GetSingle, TyperAction.GetAll, TyperAction.GetActives, TyperAction.Insert)]
    public class AnimalVM
    {
        public AnimalVM()
        {
            Id = Guid.NewGuid();
        }

        public Guid Id { get; set; }

        [Required]
        public string Nome { get; set; }

        [Required]
        [MaxLength(10)]
        public string Tipo { get; set; }
    }

    [TyperReference(typeof(Animal))]
    [AcceptTyperActions(TyperAction.Update)]
    public class AnimalUpdateVM
    {

        [Required]
        public string Nome { get; set; }

        [Required]
        [MaxLength(10)]
        public string Tipo { get; set; }
    }
}
