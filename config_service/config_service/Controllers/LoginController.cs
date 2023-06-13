using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using config_service.Models;
using config_service.Models.Authontication;
using Microsoft.IdentityModel.Tokens;
using System.Text;
using System.IdentityModel.Tokens.Jwt;
using Microsoft.AspNetCore.Authorization;
using System.ComponentModel.DataAnnotations;
using Microsoft.AspNetCore.Identity;
using System.Security.Claims;
using System.Threading.Tasks;
using Microsoft.Extensions.Configuration;
using System.Collections.Generic;

namespace config_service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        private readonly UserManager<Login> _userManager;
        private readonly SignInManager<Login> _signInManager;

        public LoginController(
            IConfiguration configuration,
            UserManager<Login> userManager,
            SignInManager<Login> signInManager)
        {
            _configuration = configuration;
            _userManager = userManager;
            _signInManager = signInManager;
        }

        private string GenerateToken(Login login)
        {
            var securityKey = new SymmetricSecurityKey(Encoding.UTF8.GetBytes(_configuration["Jwt:Key"]));
            var credentials = new SigningCredentials(securityKey, SecurityAlgorithms.HmacSha256);
            var claims = new List<Claim>
            {
                new Claim(ClaimTypes.NameIdentifier, login.username),
                new Claim(ClaimTypes.Name, login.username),
                new Claim(ClaimTypes.Role, "Admin") // replace with the actual role(s) of the user
            };
            var token = new JwtSecurityToken(
                _configuration["Jwt:Issuer"],
                _configuration["Jwt:Audience"],
                claims,
                expires: DateTime.Now.AddMinutes(30),
                signingCredentials: credentials);
            return new JwtSecurityTokenHandler().WriteToken(token);
        }

        private async Task<Login> AuthenticateLogin(Login login)
        {
            var user = await _userManager.FindByNameAsync(login.username);
            if (user != null)
            {
                var result = await _signInManager.CheckPasswordSignInAsync(user, login.password, false);
                if (result.Succeeded)
                {
                    return user;
                }
            }
            return null;
        }

        // Testing API - To check DB con and API are working 
        [HttpGet]
        public JsonResult Get()
        {
            string q = @"select id, username, password, pro_id from login";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        // Login API
        [HttpPost]
        [Route("Login")]
        public async Task<IActionResult> Login(Login login)
        {
            IActionResult response = Unauthorized();
            var user = await AuthenticateLogin(login);
            if (user != null)
            {
                var token = GenerateToken(login);
                response = Ok(new { token = token });
            }
            return response;
        }

        // Forgot Password API
        [HttpPost]
        [Route("ForgotPassword")]
        public async Task<IActionResult> ForgotPassword(string email)
        {
            // Check if the email exists in the database
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
            {
                // Email not found, return error response
                return BadRequest("Invalid email address");
            }

            // Generate a password reset token and send password reset email to the user
            var token = await _userManager.GeneratePasswordResetTokenAsync(user);
            var passwordResetLink = Url.Action("ResetPassword", "Login", new { email = email, token = token }, Request.Scheme);
            // Send email with password reset link to the user

            return Ok("Password reset link has been sent to your email address");
        }

        // Reset Password API
        [HttpPost]
        [Route("ResetPassword")]
        public async Task<IActionResult> ResetPassword(string email, string token, string newPassword)
        {
            // Check if the email exists in the database
            var user = await _userManager.FindByEmailAsync(email);
            if (user == null)
            {
                // Email not found, return error response
                return BadRequest("Invalid email address");
            }

            // Verify the password reset token
            var result = await _userManager.ResetPasswordAsync(user, token, newPassword);
            if (!result.Succeeded)
            {
                // Invalid token or new password does not meet the password policy requirements
                return BadRequest(result.Errors);
            }

            return Ok("Password has been reset successfully");
        }

        // Add Login Details API
        [HttpPost]
        [Route("AddLogin")]
        public JsonResult AddLogin(Login login)
        {
            string q = @"INSERT INTO login (username, password, pro_id) VALUES ('" + login.username + "','" + login.password + "'," + login.pro_id + ")";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Login details added successfully");
        }

        // Update Login Details API
        [HttpPut]
        [Route("UpdateLogin")]
        public JsonResult UpdateLogin(Login login)
        {
            string q = @"UPDATE login SET password='" + login.password + "' WHERE username='" + login.username + "'";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Login details updated successfully");
        }

        // Delete Login Details API
        [HttpDelete]
        [Route("DeleteLogin/{username}")]
        public JsonResult DeleteLogin(string username)
        {
            string q = @"DELETE FROM login WHERE username='" + username + "'";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult("Login details deleted successfully");
        }
    }
}