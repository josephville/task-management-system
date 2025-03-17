using Microsoft.AspNetCore.Mvc;
using TaskManagementSystem.Models;
using System.Collections.Generic;
using Task = TaskManagementSystem.Models.Task;
using TaskManagementSystem.Data;
using Microsoft.EntityFrameworkCore;

[ApiController]
[Route("api/[controller]")]
public class TasksController : ControllerBase
{
    private readonly AppDbContext _context;

    private static List<Task> tasks = new List<Task>();

    public TasksController(AppDbContext context)
    {
        _context = context;
    }

    [HttpGet("{id}")]
    public async Task<IActionResult> GetTask(int id)
    {
        var task = await _context.Tasks.FindAsync(id);
        if (task == null) return NotFound();
        return Ok(task);
    }

    [HttpGet]
    public async Task<IActionResult> GetTasks()
    {
        return Ok(await _context.Tasks.ToListAsync());
    }

    // POST: api/tasks
    [HttpPost]
    public async Task<IActionResult> CreateTask([FromBody] Task task)
    {
        task.Id = 0;
        _context.Tasks.Add(task);
        await _context.SaveChangesAsync();

        Console.WriteLine($"Task Added: {task.Title} - {task.Description}");

        return CreatedAtAction(nameof(GetTask), new { id = task.Id }, task);
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
    //[HttpDelete("{id}")]
    //public IActionResult DeleteTask(int id)
    //{
    //    var task = tasks.Find(t => t.Id == id);
    //    if (task == null) return NotFound();

    //    tasks.Remove(task);
    //    return NoContent();
    //}

    [HttpDelete("{id}")]
    public async Task<IActionResult> DeleteTask(int id)
    {
        var task = await _context.Tasks.FindAsync(id);
        if (task == null) return NotFound();

        _context.Tasks.Remove(task);
        await _context.SaveChangesAsync();
        return NoContent();
    }
}

