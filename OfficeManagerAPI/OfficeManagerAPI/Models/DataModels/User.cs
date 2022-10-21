using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OfficeManagerAPI.Models.DataModels
{
    public class User: BaseEntity
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        public int Id { get; set; }

        [Required, StringLength(50), RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        public string FirstName { get; set; } = string.Empty;

        [Required, StringLength(50), RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        public string LastName { get; set; } = string.Empty;

        [Required, EmailAddress, RegularExpression(@"^[\w -\.] +@([\w -] +\.)+[\w-]{2,4}$", ErrorMessage = "Sintax error")]
        public string Email { get; set; } = string.Empty;

        [Required, StringLength(100)]
        public string Passw { get; set; } = string.Empty;
    }
}