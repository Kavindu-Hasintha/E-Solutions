using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data;
using System.Data.SqlClient;
using Microsoft.Extensions.Configuration;

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
            string q = @"select client_id, first_name, last_name, mobile_no, email, designation from client_detail where partner_id = @pId";
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
    }
}
