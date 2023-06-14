namespace config_service.Models
{
    public class Service
    {
        public int id { get; set; }
        public int client_id { get; set; }
        public string name { get; set; }
        public string description { get; set; }
        public string startUpType { get; set; }
        public string logOnAs { get; set; }
    }
}
