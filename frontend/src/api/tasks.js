// API functions to communicate with backend

// Validate environment variable is loaded before use
const API_URL = import.meta.env.VITE_API_URL;

if (!API_URL) {
  throw new Error(
    'VITE_API_URL is not defined. Please check your .env file and ensure VITE_API_URL is set.'
  );
}

// Helper function to handle fetch responses
async function handleResponse(response) {
  if (!response.ok) {
    const errorText = await response.text().catch(() => 'Unknown error');
    throw new Error(
      `HTTP ${response.status}: ${response.statusText}. ${errorText}`
    );
  }
  
  try {
    return await response.json();
  } catch (error) {
    throw new Error('Failed to parse response as JSON: ' + error.message);
  }
}

// Fetch all tasks from backend
export async function getTasks() {
  const url = `${API_URL}/api/tasks`;
  
  try {
    const response = await fetch(url);
    return await handleResponse(response);
  } catch (error) {
    console.error('Error getting tasks:', error.message);
    throw new Error('Failed to fetch tasks: ' + error.message);
  }
}

// Send new task to backend
export async function createTask(title, description) {
  if (!title || !title.trim()) {
    throw new Error('Task title is required');
  }
  
  const url = `${API_URL}/api/tasks`;
  const taskData = { title, description };
  
  try {
    const response = await fetch(url, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(taskData)
    });
    return await handleResponse(response);
  } catch (error) {
    console.error('Error creating task:', error.message);
    throw new Error('Failed to create task: ' + error.message);
  }
}

// Mark task as completed
export async function completeTask(taskId) {
  if (!taskId) {
    throw new Error('Task ID is required');
  }
  
  const url = `${API_URL}/api/tasks/${taskId}/complete`;
  
  try {
    const response = await fetch(url, {
      method: 'PATCH',
      headers: {
        'Content-Type': 'application/json'
      }
    });
    return await handleResponse(response);
  } catch (error) {
    console.error('Error completing task:', error.message);
    throw new Error('Failed to complete task: ' + error.message);
  }
}