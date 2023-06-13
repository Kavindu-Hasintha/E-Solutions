using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;
using config_service.Models;

namespace config_service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ClientDetailController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ClientDetailController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // Get Client Details for particular partner (2023/01/28)
        [HttpGet]
        [Route("ClientDetails")]
        public JsonResult ClientDetails(int partnerId)
        {
            string q = @"select client_id, first_name, last_name, mobile_no, email, designation, client_photo_link from client_detail where partner_id = @pId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using(SqlConnection myCon = new SqlConnection(sqlDataSource)) 
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@pId", partnerId);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        // Get check the same email user (2023/03/26)
        [HttpGet]
        [Route("CheckEmail")]
        public JsonResult CheckEmail(string email)
        {
            string q = @"select first_name from client_detail where email  = @ema";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ema", email);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            }
            if (table.Rows.Count == 0)
            {
                return new JsonResult(1);
            }
            else
            {
                return new JsonResult(-1);
            }
        }

        // Add Client to the database (2023/03/06)
        [HttpPost]
        [Route("AddClient")]
        public JsonResult AddClient(ClientDetail c)
        {
            string q = @"insert into client_detail (first_name, last_name, nic, mobile_no, email, designation, server_name, partner_id) 
                         values (@first_name, @last_name, @nic, @mobileNo, @email, @designation, @serverName, @pId)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@first_name", c.first_name);
                    myCommand.Parameters.AddWithValue("@last_name", c.last_name);
                    myCommand.Parameters.AddWithValue("@nic", c.nic);
                    myCommand.Parameters.AddWithValue("@mobileNo", c.mobile_no);
                    myCommand.Parameters.AddWithValue("@email", c.email);
                    myCommand.Parameters.AddWithValue("@designation", c.designation);
                    myCommand.Parameters.AddWithValue("@serverName", c.server_name);
                    myCommand.Parameters.AddWithValue("@pId", c.partner_id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            }

            q = @"select client_id from client_detail where email  = @ema";

            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@ema", c.email);

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
                return new JsonResult(table);
            }
        }

        // Get All Client Details (2023/03/16)
        [HttpGet]
        [Route("GetAllClients")]
        public JsonResult GetAllClients()
        {
            string q = @"select client_id, first_name, last_name, mobile_no, email, designation, client_photo_link from client_detail";
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

        // Get Total Clients (2023/06/07)
        [HttpGet]
        [Route("GetTotalClients")]
        public JsonResult GetTotalClients()
        {
            string q = @"select count(*) from client_detail";
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

        // Update Client's partner (2023/06/10)
        [HttpPut]
        [Route("UpdateCliPartner")]
        public JsonResult UpdateCliPartner(int cId, int pId)
        {
            string q = @"update client_detail set partner_id = @pId where client_id = @cId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@pId", pId);
                    myCommand.Parameters.AddWithValue("@cId", cId);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            }
            return new JsonResult(1);
        }

        // Get Clients count for a particular partner (2023/06/10)
        [HttpGet]
        [Route("GetClinetCount")]
        public JsonResult GetClinetCount(int pId)
        {
            string q = @"select count(*) from client_detail where partner_id = @pId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@pId", pId);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        // Get Client all the details (2023/06/10)
        [HttpGet]
        [Route("GetClientAllDetails")]
        public JsonResult GetClientAllDetails(int cId)
        {
            string q = @"select * from client_detail where client_id = @cId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@cId", cId);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        // Update Client Details (2023/06/10)
        [HttpPut]
        [Route("UpdateClientDe")]
        public JsonResult UpdateClientDe(ClientDetail c)
        {
            string q = @"update client_detail set first_name = @fName, last_name = @lName, nic = @nic, mobile_no = @mobile_no, email = @email, designation = @desig, server_name = @sName where client_id = @cId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@fName", c.first_name);
                    myCommand.Parameters.AddWithValue("@lName", c.last_name);
                    myCommand.Parameters.AddWithValue("@nic", c.nic);
                    myCommand.Parameters.AddWithValue("@mobile_no", c.mobile_no);
                    myCommand.Parameters.AddWithValue("@email", c.email);
                    myCommand.Parameters.AddWithValue("@desig", c.designation);
                    myCommand.Parameters.AddWithValue("@sName", c.server_name);
                    myCommand.Parameters.AddWithValue("@cId", c.client_id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            }
            return new JsonResult(1);
        }

        // Delete Client (2023/06/10)
        [HttpDelete]
        [Route("DeleteClient")]
        public JsonResult DeleteClient(int cId)
        {
            string q = @"delete from client_detail where client_id = @cId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@cId", cId);

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
