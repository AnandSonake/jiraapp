using JiraApp.Models;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;

namespace JiraApp.Controllers
{
    [ApiController]
    public class TasksController : ControllerBase
    {
        private static List<JiraTask> tasks = new List<JiraTask>() {
            new JiraTask(){  Id =1 , TaskName = "task1", TaskDescription="task1 description", Deadline = DateTime.Now.AddDays(15)},
                        new JiraTask(){  Id =2 , TaskName = "task2", TaskDescription="task2 description", Deadline = DateTime.Now.AddDays(15)}

        };

        [HttpGet]
        [Route("/tasks")]
        public IActionResult Get()
        {
            return Ok(tasks);
        }

        [HttpPost]
        [Route("/tasks")]
        public IActionResult POST(JiraTask task)
        {
            task.Id = tasks.Count + 1;
            tasks.Add(task);
            return CreatedAtAction(nameof(Get), task);
        }

        [HttpDelete("{id}")]
        [Route("/tasks/{id}")]
        public IActionResult DELETE(int id)
        {
            JiraTask taskToRemove = tasks.Find(t => t.Id == id);
            if (taskToRemove == null)
            {
                return NotFound();
            }
            tasks.Remove(taskToRemove);
            return NoContent();
        }
    }
}
