using System.ComponentModel.DataAnnotations;

namespace OfficeManagerAPI.Models.DataModels
{
    public class Booking
    {
        [Required]
        [Key]
        public int Id { get; set; }

        [Required]
        /*[DisplayFormat(DataFormatString = "{0:dd/MM/yyyy}", ApplyFormatInEditMode = true)]
        [DataType(DataType.Date)]*/
        public DateTime DateTime { get; set; }
        public string? Description { get; set; } = string.Empty;

        /*[DisplayFormat(DataFormatString = "{0:hh:mm:ss}", ApplyFormatInEditMode = true)]
        [DataType(DataType.Time)]*/
        public DateTime? StartTime { get; set; }

        /*[DisplayFormat(DataFormatString = "{0:hh:mm:ss}", ApplyFormatInEditMode = true)]
        [DataType(DataType.Time)]*/
        public DateTime? EndTime { get; set; }


        public virtual Chair? Chair { get; set; }
        public virtual Room? Room { get; set; }
        [Required]
        public virtual User User { get; set; }
    }
}
