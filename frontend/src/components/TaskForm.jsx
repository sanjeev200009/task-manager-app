import { useState } from 'react'
import { createTask } from '../api/tasks'

function TaskForm({ onTaskAdded }) {
  const [title, setTitle] = useState('')
  const [description, setDescription] = useState('')
  const [isLoading, setIsLoading] = useState(false)

  const handleSubmit = (e) => {
    e.preventDefault()
    
    // Check if title is empty
    if (!title.trim()) {
      alert('Please enter a task title')
      return
    }
    
    setIsLoading(true)
    
    // Call the API to create the task
    createTask(title, description)
      .then(newTask => {
        console.log('Task created successfully:', newTask)
        onTaskAdded(newTask)
        
        // Clear the form
        setTitle('')
        setDescription('')
      })
      .catch(error => {
        console.log('Failed to add task:', error)
        alert('Failed to add task')
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  return (
    <form onSubmit={handleSubmit} style={{ marginBottom: '20px' }}>
      <div style={{ marginBottom: '10px' }}>
        <input
          type="text"
          placeholder="Task title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          style={{ width: '100%', padding: '8px', marginBottom: '10px' }}
          disabled={isLoading}
        />
      </div>
      <div style={{ marginBottom: '10px' }}>
        <textarea
          placeholder="Task description"
          value={description}
          onChange={(e) => setDescription(e.target.value)}
          style={{ width: '100%', padding: '8px', minHeight: '80px', marginBottom: '10px' }}
          disabled={isLoading}
        />
      </div>
      <button 
        type="submit" 
        style={{ padding: '8px 16px', cursor: 'pointer' }} 
        disabled={isLoading}
      >
        {isLoading ? 'Adding...' : 'Add Task'}
      </button>
    </form>
  )
}

export default TaskForm
