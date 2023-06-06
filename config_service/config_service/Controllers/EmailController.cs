using config_service.Models;
using config_service.Services.EmailService;
using MailKit.Net.Smtp;
using MailKit.Security;
using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using MimeKit;
using MimeKit.Text;

namespace config_service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class EmailController : ControllerBase
        
    {
        private readonly IEmailService _emailService;
        public EmailController(IEmailService emailService)
        {
            _emailService = emailService;
        }
        [Authorize]
        [HttpPost]
        public IActionResult SendEmail(EmailDto request)
        {

            _emailService.SendEmail(request);
            return Ok();


        }

    }
}
