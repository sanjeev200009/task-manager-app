import { useState, useEffect } from 'react'
import { getTasks, completeTask } from '../api/tasks'

function TaskList({ refreshTrigger }) {
  const [taskList, setTaskList] = useState([])
  const [isLoading, setIsLoading] = useState(true)

  // Load tasks when component mounts or when refreshTrigger changes
  useEffect(() => {
    loadTasks()
  }, [refreshTrigger])

  const loadTasks = () => {
    setIsLoading(true)
    
    getTasks()
      .then(tasks => {
        setTaskList(tasks)
      })
      .catch(error => {
        console.log('Failed to load tasks:', error)
      })
      .finally(() => {
        setIsLoading(false)
      })
  }

  const handleCompleteTask = (taskId) => {
    completeTask(taskId)
      .then(updatedTask => {
        // Update the task in our list
        const updated = taskList.map(task => {
          if (task.id === taskId) {
            return updatedTask
          }
          return task
        })
        setTaskList(updated)
      })
      .catch(error => {
        console.log('Failed to complete task:', error)
        alert('Failed to complete task')
      })
  }

  if (isLoading) {
    return <p>Loading tasks...</p>
  }

  return (
    <div>
      <h2>Tasks</h2>
      
      {taskList.length === 0 ? (
        <p>No tasks yet. Add one to get started!</p>
      ) : (
        <ul style={{ listStyle: 'none', padding: 0 }}>
          {taskList.map((task) => (
            <li
              key={task.id}
              style={{
                border: '1px solid #ddd',
                padding: '10px',
                marginBottom: '10px',
                borderRadius: '4px',
                textDecoration: task.completed ? 'line-through' : 'none',
                opacity: task.completed ? 0.6 : 1,
              }}
            >
              <h3>{task.title}</h3>
              <p>{task.description}</p>
              
              <button
                onClick={() => handleCompleteTask(task.id)}
                disabled={task.completed}
                style={{
                  padding: '6px 12px',
                  cursor: task.completed ? 'not-allowed' : 'pointer',
                  backgroundColor: task.completed ? '#90EE90' : '#87CEEB',
                  opacity: task.completed ? 0.7 : 1,
                }}
              >
                {task.completed ? '✓ Completed' : 'Mark as Completed'}
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  )
}

export default TaskList
