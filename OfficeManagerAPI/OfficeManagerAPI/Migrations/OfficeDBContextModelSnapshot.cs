﻿// <auto-generated />
using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Infrastructure;
using Microsoft.EntityFrameworkCore.Metadata;
using Microsoft.EntityFrameworkCore.Storage.ValueConversion;
using OfficeManagerAPI.DBAccess;

#nullable disable

namespace OfficeManagerAPI.Migrations
{
    [DbContext(typeof(OfficeDBContext))]
    partial class OfficeDBContextModelSnapshot : ModelSnapshot
    {
        protected override void BuildModel(ModelBuilder modelBuilder)
        {
#pragma warning disable 612, 618
            modelBuilder
                .HasAnnotation("ProductVersion", "6.0.9")
                .HasAnnotation("Relational:MaxIdentifierLength", 128);

            SqlServerModelBuilderExtensions.UseIdentityColumns(modelBuilder, 1L, 1);

            modelBuilder.Entity("OfficeManagerAPI.Models.DataModels.Chair", b =>
                {
                    b.Property<int>("Id")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("Id"), 1L, 1);

                    b.Property<bool>("Aviable")
                        .HasColumnType("bit");

                    b.HasKey("Id");

                    b.ToTable("Chairs");
                });

            modelBuilder.Entity("OfficeManagerAPI.Models.DataModels.User", b =>
                {
                    b.Property<int>("StudentId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("StudentId"), 1L, 1);

                    b.Property<DateTime>("CreatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("CreatedBy")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<DateTime?>("DelatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("DelatedBy")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("Email")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.Property<string>("FirstName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<bool>("IsAdmin")
                        .HasColumnType("bit");

                    b.Property<bool>("IsDeleted")
                        .HasColumnType("bit");

                    b.Property<string>("LastName")
                        .IsRequired()
                        .HasMaxLength(50)
                        .HasColumnType("nvarchar(50)");

                    b.Property<string>("Passw")
                        .IsRequired()
                        .HasMaxLength(100)
                        .HasColumnType("nvarchar(100)");

                    b.Property<DateTime?>("UpdatedAt")
                        .HasColumnType("datetime2");

                    b.Property<string>("UpdatedBy")
                        .IsRequired()
                        .HasColumnType("nvarchar(max)");

                    b.HasKey("StudentId");

                    b.ToTable("Users");
                });

            modelBuilder.Entity("OfficeManagerAPI.Models.DataModels.Zone", b =>
                {
                    b.Property<int>("ZoneId")
                        .ValueGeneratedOnAdd()
                        .HasColumnType("int");

                    SqlServerPropertyBuilderExtensions.UseIdentityColumn(b.Property<int>("ZoneId"), 1L, 1);

                    b.Property<int?>("ChairId")
                        .HasColumnType("int");

                    b.HasKey("ZoneId");

                    b.HasIndex("ChairId");

                    b.ToTable("Zone");
                });

            modelBuilder.Entity("OfficeManagerAPI.Models.DataModels.Zone", b =>
                {
                    b.HasOne("OfficeManagerAPI.Models.DataModels.Chair", null)
                        .WithMany("Zones")
                        .HasForeignKey("ChairId");
                });

            modelBuilder.Entity("OfficeManagerAPI.Models.DataModels.Chair", b =>
                {
                    b.Navigation("Zones");
                });
#pragma warning restore 612, 618
        }
    }
}
