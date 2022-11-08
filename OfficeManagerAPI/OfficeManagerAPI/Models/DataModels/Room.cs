using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OfficeManagerAPI.Models.DataModels
{
    public class Room
    {
        [Required]
        [Key]
        [ForeignKey("Booking")]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        [Required]
        public int Size { get; set; }
        [Required]
        public string Position { get; set; }
        [Required]
        public bool Available { get; set; }
    }
}