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
    public class ReportHostingController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ReportHostingController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // Get all report hosting files to particular Client
        [HttpGet]
        [Route("getHostingFiles")]
        public JsonResult getHostingFiles(int cId)
        {
            string q = @"select id, file_name, file_size from reportHosting where client_id = @cId";
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

        // Get search files to particular Client
        [HttpGet]
        [Route("getSearchHosting")]
        public JsonResult getSearchHosting(int cId, string searchKey)
        {
            string q = @"select id, file_name, file_size from reportHosting where client_id = @cId and file_name like '%' + @searchKey + '%'";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@cId", cId);
                    myCommand.Parameters.AddWithValue("@searchKey", searchKey);

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
