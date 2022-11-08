using OfficeManagerAPI.Models.DataModels;
using System.ComponentModel.DataAnnotations;

namespace OfficeManagerAPI.Data
{
    public class BookingDTO
    {
        [Required]
        [Key]
        public int Id { get; set; }
        [Required]
        public DateTime DateTime { get; set; }
        public string? Description { get; set; } = string.Empty;

        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }
        public int? ChairId { get; set; }
        public int? RoomId { get; set; }
        [Required]
        public int UserId { get; set; }

        public BookingDTO(Booking booking)
        {
            Id = booking.Id;
            DateTime = booking.DateTime;
            Description = booking.Description;
            StartTime = booking.StartTime;
            EndTime = booking.EndTime;
            ChairId = booking.Chair.Id;
            RoomId = booking.Room.Id;
            UserId = booking.User.Id;
        }
    }
}
