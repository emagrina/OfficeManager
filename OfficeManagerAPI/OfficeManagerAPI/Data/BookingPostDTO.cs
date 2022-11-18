namespace OfficeManagerAPI.Data
{
    public class BookingPostDTO
    {
        public DateOnly DateTime { get; set; }
        public string? Description { get; set; } = string.Empty;
        public TimeOnly? StartTime { get; set; }
        public TimeOnly? EndTime { get; set; }
        public int? ChairId { get; set; }
        public int? RoomId { get; set; }
        public int UserId { get; set; }
    }
}
