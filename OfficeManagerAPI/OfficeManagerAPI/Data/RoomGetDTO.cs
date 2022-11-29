namespace OfficeManagerAPI.Data
{
    public class RoomGetDTO
    {
        public int Id { get; set; }
        public string Name { get; set; } = string.Empty;
        public int Size { get; set; }
        public string Position { get; set; }
        public bool Available { get; set; }
    }
}
