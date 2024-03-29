﻿using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OfficeManagerAPI.Models.DataModels
{
    public class Room
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Size { get; set; }
        public string Position { get; set; }
        public bool Available { get; set; }

        public virtual ICollection<RoomBooking> RoomBooking { get; set; }
    }
}