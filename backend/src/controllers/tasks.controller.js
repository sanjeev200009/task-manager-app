const store = require("../data/tasks.store");

// Get all tasks
function getTasks(req, res) {

  const tasks = store.getAllTasks();
  res.json(tasks);
}

// Create a new task
function createTask(req, res) {
  const title = req.body.title;
  const description = req.body.description;
  
  // Check if both fields are provided
  if (!title) {
    res.status(400).json({ message: "Title is required" });
    return;
  }
  
  if (!description) {
    res.status(400).json({ message: "Description is required" });
    return;
  }
  
  const newTask = store.addTask(title, description);
  res.status(201).json(newTask);
}

// Mark a task as completed
function markCompleted(req, res) {
  const taskId = parseInt(req.params.id);
  
  const updatedTask = store.completeTask(taskId);
  
  if (!updatedTask) {
    res.status(404).json({ message: "Task not found" });
    return;
  }
  
  res.json(updatedTask);
}

module.exports = {
  getTasks: getTasks,
  createTask: createTask,
  markCompleted: markCompleted
};
