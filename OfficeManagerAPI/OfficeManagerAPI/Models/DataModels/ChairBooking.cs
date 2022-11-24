namespace OfficeManagerAPI.Models.DataModels
{
    public class ChairBooking
    {
        public int Id { get; set; }
        public DateTime DateTime { get; set; }
        
        public virtual Chair Chair { get; set; }
        public int ChairId { get; set; }
        public virtual User User { get; set; }
        public int UserId { get; set; }
    }
}
