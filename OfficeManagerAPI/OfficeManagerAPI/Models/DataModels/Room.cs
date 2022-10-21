using System.ComponentModel.DataAnnotations;

namespace OfficeManagerAPI.Models.DataModels
{
    public class Room
    {
        [Required]
        [Key]
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        [Required]
        public int Size { get; set; }

        public virtual Zone Zone { get; set; }
    }
}