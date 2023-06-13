using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using config_service.Models;

namespace config_service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ServerController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ServerController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // Get all Server Details (2023/06/12)
        [HttpGet]
        [Route("GetAllServers")]
        public JsonResult GetAllServers()
        {
            string q = @"SELECT s.id, s.server_name, s.ip_add, s.status, c.first_name, c.last_name
                            FROM server as s
                            LEFT JOIN client_detail as c
                            ON s.client_id = c.client_id
                            ORDER BY s.id";
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

        // Get all Server Performance (2023/06/12)
        [HttpGet]
        [Route("GetServersPerformance")]
        public JsonResult GetServersPerformance()
        {
            string q = @"select id, server_name, performance from server";
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
    }
}
