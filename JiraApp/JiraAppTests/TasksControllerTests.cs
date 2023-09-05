using System;
using System.Collections.Generic;
using JiraApp.Controllers;
using JiraApp.Models;
using Microsoft.AspNetCore.Mvc;
using Moq;
using NUnit.Framework;

namespace JiraApp.Tests
{
    [TestFixture]
    public class TasksControllerTests
    {
        [Test]
        public void Get_ReturnsListOfTasks()
        {
            var controller = new TasksController();

            var result = controller.Get() as OkObjectResult;
            var tasks = result?.Value as List<JiraTask>;

            Assert.IsNotNull(result);
            Assert.IsNotNull(tasks);
            Assert.AreEqual(2, tasks.Count);
        }

        [Test]
        public void Post_CreatesNewTask()
        {
            var controller = new TasksController();
            var newTask = new JiraTask { TaskName = "New Task", TaskDescription = "Description", Deadline = DateTime.Now.AddDays(30) };

            var result = controller.POST(newTask) as CreatedAtActionResult;
            var createdTask = result?.Value as JiraTask;

            Assert.IsNotNull(result);
            Assert.IsNotNull(createdTask);
            Assert.AreEqual("New Task", createdTask.TaskName); 
        }

        [Test]
        public void Delete_RemovesTask()
        {
            var controller = new TasksController();
            var taskIdToRemove = 1;

            var result = controller.DELETE(taskIdToRemove) as NoContentResult;

            Assert.IsNotNull(result);

        }

        [Test]
        public void Delete_ReturnsNotFoundForInvalidTaskId()
        {
            var controller = new TasksController();
            var invalidTaskId = 999;

            var result = controller.DELETE(invalidTaskId) as NotFoundResult;

            Assert.IsNotNull(result);
        }
    }
}
