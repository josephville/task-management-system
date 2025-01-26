using Microsoft.AspNetCore.Mvc;
using TaskManagementSystem.Models;
using System.Collections.Generic;
using Task = TaskManagementSystem.Models.Task;

[Route("api/[controller]")]
[ApiController]
public class TasksController : ControllerBase
{
    private static List<Task> tasks = new List<Task>();

    // GET: api/tasks
    [HttpGet]
    public ActionResult<IEnumerable<Task>> GetTasks()
    {
        return Ok(tasks);
    }

    // POST: api/tasks
    [HttpPost]
    public ActionResult<Task> CreateTask([FromBody] Task task)
    {
        task.Id = tasks.Count + 1; // simple ID increment
        tasks.Add(task);
        return CreatedAtAction(nameof(GetTasks), new { id = task.Id }, task);
    }

    // PUT: api/tasks/{id}
    [HttpPut("{id}")]
    public IActionResult UpdateTask(int id, [FromBody] Task updatedTask)
    {
        var task = tasks.Find(t => t.Id == id);
        if (task == null) return NotFound();

        task.Title = updatedTask.Title;
        task.Description = updatedTask.Description;
        task.Status = updatedTask.Status;
        task.Priority = updatedTask.Priority;
        task.DueDate = updatedTask.DueDate;

        return NoContent();
    }

    // DELETE: api/tasks/{id}
    [HttpDelete("{id}")]
    public IActionResult DeleteTask(int id)
    {
        var task = tasks.Find(t => t.Id == id);
        if (task == null) return NotFound();

        tasks.Remove(task);
        return NoContent();
    }
}

