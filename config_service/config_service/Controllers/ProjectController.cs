using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using System.Data.SqlClient;
using System.Data;
using config_service.Models;

namespace config_service.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProjectController : ControllerBase
    {
        private readonly IConfiguration _configuration;

        public ProjectController(IConfiguration configuration)
        {
            _configuration = configuration;
        }

        // Get Project Details for particular partner
        [HttpGet]
        [Route("ProjectDetails")]
        public JsonResult ProjectDetails(int id)
        {
            string q = @"select id, p_name, status, progress, created_at from project where pro_id = @Id";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Id", id);
                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        // Add project
        [HttpPost]
        [Route("AddProject")]
        public JsonResult AddProject(Project p)
        {
            string q = @"insert into project (pro_id, p_name, status, progress) values (@pId, @pName, @status, @progress)";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@pId", p.pro_id);
                    myCommand.Parameters.AddWithValue("@pName", p.p_name);
                    myCommand.Parameters.AddWithValue("@status", p.status);
                    myCommand.Parameters.AddWithValue("@progress", p.progress);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }

                return new JsonResult(1);
            }
        }

        // Edit project
        [HttpPut]
        [Route("editProject")]
        public JsonResult editProject(Project p)
        {
            string q = @"update project set p_name = @pName, status = @status, progress = @progress, created_at = @cDate where id = @Id";        
            int numberOfRowsEffected = 0;
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Id", p.id);
                    myCommand.Parameters.AddWithValue("@pName", p.p_name);
                    myCommand.Parameters.AddWithValue("@status", p.status);
                    myCommand.Parameters.AddWithValue("@progress", p.progress);
                    myCommand.Parameters.AddWithValue("@cDate", p.created_at);

                    numberOfRowsEffected = myCommand.ExecuteNonQuery();
                    myCon.Close();
                }

                return new JsonResult(numberOfRowsEffected);
            }
        }

        // Search Projects for particular partner
        [HttpGet]
        [Route("SearchProject")]
        public JsonResult SearchProject(int id, string searchKey)
        {
            string q = @"select id, p_name, status, progress, created_at from project where pro_id = @pId and p_name like '%' + @searchKey + '%'";
            DataTable table = new DataTable();
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            SqlDataReader myReader;
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@pId", id);
                    myCommand.Parameters.AddWithValue("@searchKey", searchKey);

                    myReader = myCommand.ExecuteReader();
                    table.Load(myReader);
                    myReader.Close();
                    myCon.Close();
                }
            }
            return new JsonResult(table);
        }

        // Delete a Project for particular partner
        [HttpDelete]
        [Route("deleteProject")]
        public JsonResult deleteProject(int id)
        {
            string q = @"delete from project where id = @Id";
            int numberOfRowsEffected = 0;
            string sqlDataSource = _configuration.GetConnectionString("ConfigDBConnecion");
            using (SqlConnection myCon = new SqlConnection(sqlDataSource))
            {
                myCon.Open();
                using (SqlCommand myCommand = new SqlCommand(q, myCon))
                {
                    myCommand.Parameters.AddWithValue("@Id", id);

                    numberOfRowsEffected = myCommand.ExecuteNonQuery();
                    myCon.Close();
                }
            }
            return new JsonResult(numberOfRowsEffected);
        }
    }
}