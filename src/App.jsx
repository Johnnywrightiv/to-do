import React, { useState } from 'react';
import TaskList from './task-list';
import AddTaskForm from './add-task-form';

const App = () => {
  const [tasks, setTasks] = useState([]);

  const addTask = (taskName) => {
    setTasks([...tasks, { name: taskName, completed: false }]);
  };

  const completeTask = (taskIndex, completed = true) => {
    const updatedTasks = tasks.map((task, index) =>
      index === taskIndex ? { ...task, completed: completed } : task
    );
    setTasks(updatedTasks);
  };

  const incompleteTask = (taskIndex) => {
    completeTask(taskIndex, false); // Set completed to false
  };

  const deleteTask = (taskIndex) => {
    const updatedTasks = tasks.filter((task, index) => index !== taskIndex);
    setTasks(updatedTasks);
  };

  return (
    <div className="flex flex-col items-center mx-auto max-w-md">
      <AddTaskForm addTask={addTask} />
      <TaskList tasks={tasks} completeTask={completeTask} incompleteTask={incompleteTask} deleteTask={deleteTask} />
    </div>
  );
};

export default App;
