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
        public ICollection<Chair> Chairs { get; set; }
    }
}
