using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using config_service.Models;

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

        // Testing API - To check DB con and API are working 
        [HttpGet]
        public JsonResult Get()
        {
            string q = @"select id, username, password, pro_id from login";
            DataTable table= new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using(SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand = new SqlCommand(q, myCon)) 
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
        public JsonResult Login (Login ln)
        {
            string q = @"select pro_id, desig_id from login where username = @username and password = @password";
            DataTable table= new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using(SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@username", ln.username);
                    myCommand.Parameters.AddWithValue("@password", ln.password);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            if (table.Rows.Count == 0)
            {
                return new JsonResult(-1);
            }
            else
            {
                /*DataRow row = table.Rows[0];
                string pro_id = row["pro_id"].ToString();
                string desig_id = row["desig_id"].ToString();
                */
                return new JsonResult(table);
            }
            
        }

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

        // Check current password is matching or not (2023/06/04)
        [HttpPost]
        [Route("CheckPassword")]
        public JsonResult CheckPassword(Login ln)
        {
            string q = @"select pro_id from login where pro_id = @pId and password = @password";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@pId", ln.pro_id);
                    myCommand.Parameters.AddWithValue("@password", ln.password);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            if (table.Rows.Count == 0)
            {
                return new JsonResult(-1);
            }
            else
            {
                return new JsonResult(1);
            }
        }

        // Change Password API (2023/06/04)
        [HttpPost]
        [Route("ChangePassword")]
        public JsonResult ChangePassword(Login ln)
        {
            string q = @"update login set password = @pword where pro_id = @pId";
            int numberOfRowsEffected = 0;
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@pId", ln.pro_id);
                    myCommand.Parameters.AddWithValue("@pword", ln.password);

                    numberOfRowsEffected = myCommand.ExecuteNonQuery();
                    myCon.Close();
                }
            }
            if (numberOfRowsEffected == 1)
            {
                return new JsonResult(1);
            }
            else
            {
                return new JsonResult(-1);
            }
        }
    }
}
