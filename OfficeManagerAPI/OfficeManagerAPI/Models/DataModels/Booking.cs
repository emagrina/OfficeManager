﻿using System.ComponentModel.DataAnnotations;
using System.Data;
using System.Diagnostics.CodeAnalysis;
using System.Data.SqlTypes;

namespace OfficeManagerAPI.Models.DataModels
{
    public class Booking
    {
        public int Id { get; set; }
        public DateTime? DateTime { get; set; }
        public string? Description { get; set; } = string.Empty;
        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }


        public virtual Chair Chair { get; set; }
        public int? ChairId { get; set; }
        public virtual Room Room { get; set; }
        public int? RoomId { get; set; }
        public virtual User User { get; set; }
        public int UserId { get; set; }
    }
}
