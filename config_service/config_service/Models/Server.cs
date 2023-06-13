namespace config_service.Models
{
    public class Server
    {
        public int id { get; set; }
        public string server_name { get; set; }
        public string ip_add { get; set; }
        public string status { get; set; }
        public int client_id { get; set; }
    }
}
