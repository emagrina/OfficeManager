using OfficeManagerAPI.Models.DataModels;

namespace OfficeManagerAPI.Data
{
    public class ChairBookingDTO
    {
        public string Date { get; set; }

        public int ChairId { get; set; }
        public int UserId { get; set; }
    }
}
