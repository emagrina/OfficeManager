using System.ComponentModel;
using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;

namespace OfficeManagerAPI.Models.DataModels
{
    public class User: BaseEntity
    {

        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
<<<<<<< HEAD
        public int Id { get; set; }

=======
        public int StudentId { get; set; }
        
>>>>>>> 6264aa03578348272e2a9ef03f3207e66b5bc85d
        [Required, StringLength(50), RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        public string FirstName { get; set; } = string.Empty;

        [Required, StringLength(50), RegularExpression(@"^[a-zA-Z]+$", ErrorMessage = "Use letters only please")]
        public string LastName { get; set; } = string.Empty;
        
        [Required, DefaultValue(false)]
        public bool IsAdmin { get; set; } = false;

        [Required, EmailAddress, RegularExpression(@"^[\w -\.] +@([\w -] +\.)+[\w-]{2,4}$", ErrorMessage = "Sintax error")]
        public string Email { get; set; } = string.Empty;

        [Required, StringLength(100)]
        public string Passw { get; set; } = string.Empty;
    }
}