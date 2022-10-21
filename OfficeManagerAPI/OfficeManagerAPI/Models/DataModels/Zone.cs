using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OfficeManagerAPI.Models.DataModels
{
    public class Zone
    {
        [Required]
        [Key]
        public int ZoneId { get; set; }
        [Required]
        public virtual ICollection<Chair> Chairs { get; set; }
        public virtual ICollection<Room> Rooms { get; set; }
    }
}