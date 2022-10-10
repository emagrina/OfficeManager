using System.ComponentModel.DataAnnotations;

namespace OfficeManagerAPI.Models.DataModels
{
    public class Chair
    {
        [Required]
        [Key]
        public int Id { get; set; }

        [Required]
        public bool Aviable { get; set; } = false;

        [Required]
        public string Room_Id { get; set; }
    }
}
