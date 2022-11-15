using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OfficeManagerAPI.Models.DataModels
{
    public class Chair
    {
        [ForeignKey("Booking")]
        public int Id { get; set; }
        public string Position { get; set; }
        public bool Available { get; set; }
    }
}
