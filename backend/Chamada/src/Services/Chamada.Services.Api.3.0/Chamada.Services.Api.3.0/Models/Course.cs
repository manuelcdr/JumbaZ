using System;
using System.ComponentModel.DataAnnotations;

namespace Chamada.Services.Api30.Models
{
    public class Course
    {
        [Key]
        public Guid Id { get; set; }
        [Required]
        public string Name { get; set; }
        public string Description { get; set; }
    }
}
