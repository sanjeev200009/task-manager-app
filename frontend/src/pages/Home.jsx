import { useState } from 'react'
import TaskForm from '../components/TaskForm'
import TaskList from '../components/TaskList'

function Home() {
  const [refreshKey, setRefreshKey] = useState(0)

  const handleTaskAdded = () => {
    setRefreshKey(prev => prev + 1)
  }

  return (
    <div>
      <h1>Task Manager</h1>
      <TaskForm onTaskAdded={handleTaskAdded} />
      <TaskList refreshTrigger={refreshKey} />
    </div>
  )
}

export default Home
