﻿using Microsoft.EntityFrameworkCore;
using OfficeManagerAPI.Models.DataModels;

namespace OfficeManagerAPI.DBAccess
{
    public class DBAccess : DbContext
    {
        public DBAccess(DbContextOptions<DBAccess> options) : base(options)
        {

        }

        // Tables of the DataBase
        public DbSet<Chair>? Chairs { get; set; }
        public DbSet<User>? Users { get; set; }

    }
}