using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OfficeManagerAPI.Models.DataModels
{
    public class Chair
    {
        public int Id { get; set; }
        public string Position { get; set; }
        public bool Available { get; set; }

        public virtual ICollection<ChairBooking> ChairBooking { get; set; }
    }
}
