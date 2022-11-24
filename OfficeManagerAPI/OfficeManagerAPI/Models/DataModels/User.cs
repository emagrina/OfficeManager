using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OfficeManagerAPI.Models.DataModels
{
    public class User: BaseEntity
    {
        public int Id { get; set; }
        public string FirstName { get; set; } = string.Empty;
        public string LastName { get; set; } = string.Empty;
        public bool IsAdmin { get; set; } = false;
        public string Email { get; set; } = string.Empty;
        public string Passw { get; set; } = string.Empty;

        public virtual ICollection<ChairBooking> ChairBooking { get; set; }
        public virtual ICollection<RoomBooking> RoomBooking { get; set; }
    }
}