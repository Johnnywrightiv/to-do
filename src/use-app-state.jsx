// useTasksState.js
import { useState } from 'react';

const useTasksState = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]);
  };

  const completeTask = (taskIndex, completed = true) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, completed } : task
    );
    setTasks(updatedTasks);
  };

  const incompleteTask = (taskIndex) => {
    completeTask(taskIndex, false);
  };

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  return { tasks, addTask, completeTask, incompleteTask, deleteTask };
};

export default useTasksState;