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
    public class ErrorLogController : ControllerBase
    {
        private readonly IConfiguration _configuration;
        public ErrorLogController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // Get all error log files to particular Client
        [HttpGet]
        [Route("getErrorLog")]
        public JsonResult getErrorLog(int cId)
        {
            string q = @"select id, file_name, file_size from errorLog where client_id = @cId";
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

        // Get search error log files to particular Client
        [HttpGet]
        [Route("getSearchErrorLog")]
        public JsonResult getSearchErrorLog(int cId, string searchKey)
        {
            string q = @"select id, file_name, file_size from errorLog where client_id = @cId and file_name like '%' + @searchKey + '%'";
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
