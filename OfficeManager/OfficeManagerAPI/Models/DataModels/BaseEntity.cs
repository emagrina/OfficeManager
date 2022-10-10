namespace OfficeManagerAPI.Models.DataModels
{
    public class BaseEntity
    {
        public String CreatedBy { get; set; } = String.Empty;
        public DateTime CreatedAt { get; set; } = DateTime.Now;
        public String UpdatedBy { get; set; } = String.Empty;
        public DateTime? UpdatedAt { get; set; }
        public String DelatedBy { get; set; } = String.Empty;
        public DateTime? DelatedAt { get; set; }
        public bool IsDeleted { get; set; } = false;
    }
}

