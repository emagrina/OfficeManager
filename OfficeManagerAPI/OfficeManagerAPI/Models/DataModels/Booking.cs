using System.ComponentModel.DataAnnotations;

namespace OfficeManagerAPI.Models.DataModels
{
    public class Booking
    {
        public int Id { get; set; }
        public DateTime DateTime { get; set; }
        public string? Description { get; set; } = string.Empty;
        public Nullable<DateTime> StartTime { get; set; }
        public Nullable<DateTime> EndTime { get; set; }


        public virtual Chair Chair { get; set; }
        public int? ChairId { get; set; }
        public virtual Room Room { get; set; }
        public int? RoomId { get; set; }
        public virtual User User { get; set; }
        public int UserId { get; set; }
    }
}
