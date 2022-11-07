using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OfficeManagerAPI.Models.DataModels
{
    public class Chair
    {
        [Required]
        [Key]
        [ForeignKey("Booking")]
        public int Id { get; set; }
        [Required]
        public string Position { get; set; }
        [Required]
        public bool Available { get; set; }
    }
}
