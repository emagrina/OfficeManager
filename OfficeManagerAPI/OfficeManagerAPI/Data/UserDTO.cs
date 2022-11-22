using OfficeManagerAPI.Models.DataModels;

namespace OfficeManagerAPI.Data
{
    public class UserDTO: BaseEntity
    {
        public int Id { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public bool IsAdmin { get; set; }
        public string Email { get; set; }
        public string Passw { get; set; }
    }
}
