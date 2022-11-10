using System.ComponentModel.DataAnnotations;

namespace OfficeManagerAPI.Models.DataModels
{
    public class Booking
    {
        [Required]
        [Key]
        public int Id { get; set; }
        [Required]
        public DateTime DateTime { get; set; }
        public string? Description { get; set; } = string.Empty;

        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }


        public virtual Chair? Chair { get; set; }
        public virtual Room? Room { get; set; }
        [Required]
        public virtual User User { get; set; }
    }
}
