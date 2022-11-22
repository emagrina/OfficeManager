﻿using OfficeManagerAPI.Models.DataModels;

namespace OfficeManagerAPI.Data
{
    public class UserPostDTO: BaseEntity
    { 
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsAdmin { get; set; }
        public string Email { get; set; }
        public string Passw { get; set; }
    }
}