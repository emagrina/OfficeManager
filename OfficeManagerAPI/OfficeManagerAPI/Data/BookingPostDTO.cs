namespace OfficeManagerAPI.Data
{
    public class BookingPostDTO
    {
        public DateOnly Date { get; set; }
        public string? Description { get; set; } = string.Empty;
        public DateTime? StartTime { get; set; }
        public DateTime? EndTime { get; set; }
        public int? ChairId { get; set; }
        public int? RoomId { get; set; }
        public int UserId { get; set; }
    }
}
