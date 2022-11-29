namespace OfficeManagerAPI.Data
{
    public class RoomDTO
    {
        public string Name { get; set; } = string.Empty;
        public int Size { get; set; }
        public string Position { get; set; }
        public bool Available { get; set; }
    }
}
