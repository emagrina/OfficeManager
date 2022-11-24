using OfficeManagerAPI.Models.DataModels;

namespace OfficeManagerAPI.Data
{
    public class ChairBookingGetDTO
    {
        public int Id { get; set; }
        public DateTime DateTime { get; set; }

        public int ChairId { get; set; }
        public int UserId { get; set; }
    }
}
