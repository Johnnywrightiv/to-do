import React, { useState } from 'react';
import TaskList from './task-list';
import AddTaskForm from './add-task-form';
// App.jsx
import useAppState from './useAppState';

const App = () => {
  const { tasks, addTask, completeTask, incompleteTask, deleteTask } = useAppState();

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
