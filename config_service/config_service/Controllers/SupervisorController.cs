using config_service.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;

namespace config_service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class SupervisorController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public SupervisorController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // Add Supervisor Details API (2023/02/28)
        [HttpPost]
        [Route("AddSupervisor")]
        public JsonResult AddSupervisor(Supervisor sp)
        {
            string q = @"insert into supervisor (pro_id, sup_id) values (@pId, @sId)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@pId", sp.pro_id);
                    myCommand.Parameters.AddWithValue("@sId", sp.sup_id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(1);

        }

        // Get Partner IDs for particular Admin (2023/03/10)
        [HttpGet]
        [Route("PartnerIDs")]
        public JsonResult PartnerIDs(int supervisorId)
        {
            string q = @"select  pro_id from supervisor where sup_id = @sId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@sId", supervisorId);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            }
            return new JsonResult(table);
        }

        // Get Count of employees of a particular Admin (2023/06/09)
        [HttpGet]
        [Route("GetCountEmployees")]
        public JsonResult GetCountEmployees(int id)
        {
            string q = @"select count(*) from supervisor where sup_id = @id";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@id", id);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();

                }
            }
            return new JsonResult(table);
        }

        // Update admin (2023/06/10)
        [HttpPut]
        [Route("UpdateAdmin")]
        public JsonResult UpdateAdmin(int pId, int sId)
        {
            string q = @"update supervisor set sup_id = @sId where pro_id = @pId";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@sId", sId);
                    myCommand.Parameters.AddWithValue("@pId", pId);

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
