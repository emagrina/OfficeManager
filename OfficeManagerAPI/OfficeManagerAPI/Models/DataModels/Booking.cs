using System.ComponentModel.DataAnnotations;

namespace OfficeManagerAPI.Models.DataModels
{
    public class Booking
    {
        [Required]
        [Key]
        public int Id { get; set; }
        public DateTime DateTime { get; set; }
        public string Description { get; set; } = string.Empty;


        public virtual Chair Chair { get; set; }
        public virtual Room Room { get; set; }
        public virtual User User { get; set; }
    }
}
