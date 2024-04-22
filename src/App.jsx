// This component is the root of the front end.

import React, { useState, useEffect } from 'react';
import TaskList from './task-list';
import AddTaskForm from './add-task-form';
import useAppState from './use-app-state';

const App = () => {
  const { tasks, addTask, completeTask, incompleteTask, deleteTask, setTasks } = useAppState();

  useEffect(() => {
    fetchTasks(); // Fetch tasks when component mounts
  }, []);

  const fetchTasks = async () => {
    try {
      const response = await fetch('http://localhost:3000/api/tasks');
      const data = await response.json();
      setTasks(data);
    } catch (error) {
      console.error('Error fetching tasks:', error);
    }
  };

  return (
    <div className="flex justify-center items-center min-h-screen">
      <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg">
        <TaskList
          tasks={tasks}
          completeTask={completeTask}
          incompleteTask={incompleteTask}
          deleteTask={deleteTask}
        />
        <AddTaskForm addTask={addTask} />
      </div>
    </div>
  );
};
export default App;
