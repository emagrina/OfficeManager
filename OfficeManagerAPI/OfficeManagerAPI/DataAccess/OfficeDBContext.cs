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
        public DbSet<Chair> Chairs { get; set; }
        public DbSet<User> Users { get; set; }
        public DbSet<Booking> Bookings { get; set; }
        public DbSet<Room> Rooms { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            base.OnModelCreating(modelBuilder);
            // modelBuilder.Seed();

            /*foreach ( var foreignKey in modelBuilder.Model.GetEntityTypes()
                .SelectMany(e => e.GetForeignKeys()))
            {
                foreignKey.DeleteBehavior = DeleteBehavior.Restrict;
            }*/

            modelBuilder.Entity<Chair>(entity =>
            {
                entity.HasKey(x => x.Id);

                entity.Property(x => x.Position).IsRequired();

                entity.Property(x => x.Available).IsRequired();
            });

            modelBuilder.Entity<Room>(entity =>
            {
                entity.HasKey(x => x.Id);

                entity.Property(entity => entity.Size).IsRequired();

                entity.Property(entity => entity.Position).IsRequired();

                entity.Property(entity => entity.Available).IsRequired();
            });

            modelBuilder.Entity<User>(entity =>
            {
                entity.HasKey(x => x.Id);

                entity.Property(x => x.Id).ValueGeneratedOnAdd();

                entity.Property(x => x.FirstName).IsRequired().HasMaxLength(50);

                entity.Property(x => x.LastName).IsRequired().HasMaxLength(50);

                entity.Property(x => x.IsAdmin).IsRequired().HasDefaultValue(false);

                entity.Property(x => x.Email).IsRequired();

                entity.Property(x => x.Passw).IsRequired();
            });

            modelBuilder.Entity<Booking>(entity =>
            {
                entity.HasKey(x => x.Id);

                entity.Property(x => x.Id).ValueGeneratedOnAdd();

                entity.Property(x => x.DateTime).IsRequired();

                entity.Property(x => x.StartTime);

                entity.Property(x => x.EndTime);
            });
        }
    }
}