// This component contains the state logic for the app.

import { useState } from 'react';

const useAppState = () => {
  const [tasks, setTasks] = useState([]);

  // Function to add a new task
  const addTask = async (taskName) => {
    try {
      const response = await fetch('http://localhost:3000/api/tasks', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ name: taskName, completed: false }),
      });
      const newTask = await response.json();
      setTasks([...tasks, newTask]); // Update tasks state with the new task
    } catch (error) {
      console.error('Error adding task:', error);
    }
  };

  // Function to delete a task
  const deleteTask = async (taskId) => {
    try {
      await fetch(`http://localhost:3000/api/tasks/${taskId}`, {
        method: 'DELETE',
      });
      const updatedTasks = tasks.filter((task) => task._id !== taskId);
      setTasks(updatedTasks); // Update tasks state after deletion
    } catch (error) {
      console.error('Error deleting task:', error);
    }
  };

  // Function to mark a task as complete
  const completeTask = async (taskId) => {
    console.log('Task ID to complete:', taskId); // Debugging
    try {
      await fetch(`http://localhost:3000/api/tasks/${taskId}/complete`, {
        method: 'PUT',
      });
      // Update local state or perform any other actions
    } catch (error) {
      console.error('Error completing task:', error);
    }
  };
  

  // Function to mark a task as incomplete
  const incompleteTask = async (taskId) => {
    try {
      await fetch(`http://localhost:3000/api/tasks/${taskId}/incomplete`, {
        method: 'PUT',
      });
      // Update local state to reflect incompleteness
      const updatedTasks = tasks.map(task =>
        task._id === taskId ? { ...task, completed: false } : task
      );
      setTasks(updatedTasks);
    } catch (error) {
      console.error('Error incompleting task:', error);
    }
  };


  return { tasks, addTask, completeTask, incompleteTask, deleteTask, setTasks };
};

export default useAppState;