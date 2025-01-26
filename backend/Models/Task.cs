namespace TaskManagementSystem.Models
{
    public class Task
    {
        public int Id { get; set; }
        public string? Title { get; set; }
        public string? Description { get; set; }
        public string? Status { get; set; } // E.g., To Do, In Progress, Done
        public string? Priority { get; set; } // E.g., Low, Medium, High
        public DateTime DueDate { get; set; }
    }
}

