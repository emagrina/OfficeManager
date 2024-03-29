﻿using OfficeManagerAPI.Models.DataModels;

namespace OfficeManagerAPI.Data
{
    public class RoomBookingGetDTO
    {
        public int Id { get; set; }
        public string StartTime { get; set; }
        public string EndTime { get; set; }
        public string Description { get; set; }

        public int RoomId { get; set; }
        public int UserId { get; set; }
    }
}
