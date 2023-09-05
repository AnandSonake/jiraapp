namespace JiraApp.Models
{
    public class JiraTask
    {
        public int Id { get; set; }
        public string TaskName { get; set; }
        public string TaskDescription { get; set; }
        public DateTime Deadline { get; set; }
    }
}
