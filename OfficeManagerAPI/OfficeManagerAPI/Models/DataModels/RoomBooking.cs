namespace OfficeManagerAPI.Models.DataModels
{
    public class RoomBooking
    {
        public int Id { get; set; }
        public DateTime StartTime { get; set; }
        public DateTime EndTime { get; set; }
        public string Description { get; set; }

        public Room Room { get; set; }
        public int RoomId { get; set; }
        public virtual User User { get; set; }
        public int UserId { get; set; }
    }
}