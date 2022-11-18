namespace OfficeManagerAPI.Data
{
    public class BookingPostDTO
    {
        public DateTime DateTime { get; set; }
        public string? Description { get; set; } = string.Empty;
        public TimeSpan? StartTime { get; set; }
        public TimeSpan? EndTime { get; set; }
        public int? ChairId { get; set; }
        public int? RoomId { get; set; }
        public int UserId { get; set; }
    }
}
