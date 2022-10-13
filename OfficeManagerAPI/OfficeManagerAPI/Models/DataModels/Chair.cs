using System.ComponentModel.DataAnnotations;
using System.Security.Policy;

namespace OfficeManagerAPI.Models.DataModels
{
    public class Chair
    {
        [Required]
        [Key]
        public int Id { get; set; }

        [Required]
        public bool Aviable { get; set; } = false;


        public ICollection<Zone> Zones { get; set; } = new List<Zone>();
    }
}
