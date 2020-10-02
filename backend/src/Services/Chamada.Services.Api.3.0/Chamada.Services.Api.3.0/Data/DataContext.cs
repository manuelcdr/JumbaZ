using Chamada.Services.Api30.Models;
using Microsoft.EntityFrameworkCore;

namespace Chamada.Services.Api30.Data
{
    public class DataContext : DbContext
    {

        public DataContext(DbContextOptions<DataContext> options) : base(options)
        {
        }

        public DbSet<Student> Students { get; set; }
        public DbSet<Course> Courses { get; set; }
    }
}
