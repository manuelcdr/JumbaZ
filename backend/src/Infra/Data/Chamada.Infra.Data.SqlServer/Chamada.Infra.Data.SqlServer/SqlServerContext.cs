using Microsoft.EntityFrameworkCore;
using System;
using System.Collections.Generic;
using System.Text;

namespace Chamada.Infra.Data.SqlServer
{
    public class SqlServerContext : DbContext
    {
        //public static DbContext Context;

        //public DbSet<Blog> Blogs { get; set; }
        //public DbSet<Post> Posts { get; set; }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            optionsBuilder.UseSqlServer(
                @"Server=(localdb)\mssqllocaldb;Database=Blogging;Integrated Security=True");

            //Context = this;
        }
    }
}
