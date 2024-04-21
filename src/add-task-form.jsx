// This component will contain the form to add new tasks.

import { useState } from 'react'

const AddTaskForm = ({ addTask }) => {
  const [newTask, setNewTask] = useState('')

  const handleSubmit = (e) => {
    // prevent page refreshing on form submission, defautl behavior
    e.preventDefault()
    // if newTask is not empty
    if (newTask.trim()) {
      addTask(newTask)
      // reset text
      setNewTask('')
    }
  }

  return (
    <form 
    onSubmit={handleSubmit}
    className="flex mb-4 w-full bg-gray-100 rounded-lg p-2">
      <input
        type="text"
        className="flex-grow border border-gray-300 rounded-l px-2 py-1 mr-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={newTask}
        onChange={(e) => setNewTask(e.target.value)}
        placeholder="Add a new task"
      />
      <button
        type="submit"
        className="bg-blue-500 text-white rounded-r px-4 py-1 hover:bg-blue-700"
      >
        Add Task
      </button>
    </form>
  )
}

export default AddTaskForm;