// Simple in-memory storage for tasks
let allTasks = [];
let nextId = 1;

// Get all tasks from memory
function getAllTasks() {
  return allTasks;
}

// Add a new task
function addTask(title, description) {
  const task = {
    id: nextId,
    title: title,
    description: description,
    completed: false
  };
  
  nextId = nextId + 1;
  allTasks.push(task);
  
  return task;
}

// Mark a task as completed
function completeTask(taskId) {
  // Find the task and mark it done
  for (let i = 0; i < allTasks.length; i++) {
    if (allTasks[i].id === taskId) {
      allTasks[i].completed = true;
      return allTasks[i];
    }
  }
  
  return null;
}

module.exports = {
  getAllTasks: getAllTasks,
  addTask: addTask,
  completeTask: completeTask
};
