using Microsoft.EntityFrameworkCore;
using OfficeManagerAPI.Models.DataModels;

namespace OfficeManagerAPI.DBAccess
{
    public class OfficeDBContext : DbContext
    {
        public OfficeDBContext(DbContextOptions<OfficeDBContext> options) : base(options)
        {

        }

        // Tables of the DataBase
        public DbSet<Chair>? Chairs { get; set; }
        public DbSet<User>? Users { get; set; }
        public DbSet<Zone>? Zone { get; set; }

        // Connection to DataBase
        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            var connect =
                $@"Server={Environment.GetEnvironmentVariable("IP")};Database={Environment.GetEnvironmentVariable("DBNAME")};User Id={Environment.GetEnvironmentVariable("DBUSERID")};Password={Environment.GetEnvironmentVariable("DBPASSWORD")}";
            optionsBuilder
                .EnableSensitiveDataLogging();
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer(connect, b => b.MigrationsAssembly("DB_Acess"));
            }
        }
    }
}
