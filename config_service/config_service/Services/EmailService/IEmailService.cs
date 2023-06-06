
using config_service.Models;


namespace config_service.Services.EmailService
{
    public interface IEmailService
    {
        void SendEmail(EmailDto request);

    }
}