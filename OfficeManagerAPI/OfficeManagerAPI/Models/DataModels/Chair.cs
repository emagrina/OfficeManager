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
        public bool Aviable { get; set; } = false;

        [Required]
        public virtual Zone Zone { get; set; }
    }
}
