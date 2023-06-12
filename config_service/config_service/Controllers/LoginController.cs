﻿using Microsoft.AspNetCore.Http;
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

namespace config_service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class LoginController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public LoginController(IConfiguration configuration)
        {
            _configuration = configuration;
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

        private Login AuthenticateLogin(Login login)
        {
            Login _login = null;
            string q = @"select pro_id, desig_id from login where username = @username and password = @password";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader = null; // initialize the reader to null
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                try
                {
                    myCon.Open();
                    using (SqlCommand myCommand = new SqlCommand(q, myCon))
                    {
                        myCommand.Parameters.AddWithValue("@username", login.username);
                        myCommand.Parameters.AddWithValue("@password", login.password);
                        myReader = myCommand.ExecuteReader();
                        table.Load(myReader);
                        myReader.Close();
                    }
                    myCon.Close();
                }
                catch (Exception ex)
                {
                    // Handle the exception here (e.g. log it, return a null value, etc.)
                    if (myReader != null && !myReader.IsClosed)
                    {
                        myReader.Close();
                    }
                    if (myCon.State != ConnectionState.Closed)
                    {
                        myCon.Close();
                    }
                    return null;
                }
            }
            if (table.Rows.Count == 0)
            {
                return null;
            }
            else
            {
                DataRow row = table.Rows[0];
                _login = new Login { username = login.username, pro_id = Convert.ToInt32(row["pro_id"]), desig_id = Convert.ToInt32(row["desig_id"]) };
                return _login;
            }
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

        // Login API (2023/01/23)

        [HttpPost]
        [Route("Login")]

        public IActionResult Login(Login login)
        {
            IActionResult response = Unauthorized();
            var user = AuthenticateLogin(login);
            if (user != null)
            {
                var token = GenerateToken(user);
                response = Ok(new { token = token });
            }
            return response;
        }


        //forgot password



        // Add Login Details API (2023/02/28)

        [HttpPost]
        [Route("AddLogin")]
        public JsonResult AddLogin(Login ln)
        {
            string q = @"insert into login (username, password, pro_id, desig_id) values (@username, @password, @pid, @did)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@username", ln.username);
                    myCommand.Parameters.AddWithValue("@password", ln.password);
                    myCommand.Parameters.AddWithValue("@pid", ln.pro_id);
                    myCommand.Parameters.AddWithValue("@did", ln.desig_id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(1);

        }
    }
}