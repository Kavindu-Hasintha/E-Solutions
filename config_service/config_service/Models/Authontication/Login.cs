using System.ComponentModel.DataAnnotations;

namespace config_service.Models.Authontication
{
    public class Login
    {

        public int id { get; set; }
        [Required(ErrorMessage = "User Name is required")]
        public string username { get; set; }

        [Required(ErrorMessage = "Password is required")]
        public string password { get; set; }
        public int pro_id { get; set; }
        public int desig_id { get; set; }
        public byte[] PasswordHash { get; set; } = new byte[32];
        public byte[] PasswordSalt { get; set; } = new byte[32];
        public string? VerificationToken { get; set; }
        public DateTime? VerifiedAt { get; set; }
        public string? PasswordResetToken { get; set; }
        public DateTime? ResetTokenExpires { get; set; }
    }
}
