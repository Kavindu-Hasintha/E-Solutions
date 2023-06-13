namespace config_service.Models
{
    public class Project
    {
        public int id { get; set; }
        public int pro_id { get; set; }
        public string p_name { get; set; }
        public int status { get; set; }
        public int progress { get; set; }
        public string created_at { get; set; }

    }
}
