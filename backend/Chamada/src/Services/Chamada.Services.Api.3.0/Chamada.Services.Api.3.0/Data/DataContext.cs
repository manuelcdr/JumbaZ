using Chamada.Services.Api30.Models;
using Microsoft.EntityFrameworkCore;
using TyperCore.Attributes;
using System.Reflection;
using TyperCore;
using TyperCore.Extensions;

namespace Chamada.Services.Api30.Data
{
    public class DataContext : DbContext
    {
        private readonly Typer typer;

        public DataContext(DbContextOptions<DataContext> options, Typer typer) : base(options)
        {
            this.typer = typer;
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
    }
}
