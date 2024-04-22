// This component will contain the list of tasks.

import React, { useState } from 'react';
import useClickToEdit from './use-click-to-edit';
import TaskItem from './task-item';

const TaskList = ({ tasks, completeTask, incompleteTask, deleteTask }) => {
  const [listTitle, setListTitle] = useState('TO DO LIST');
  const { isEditing, editedText, setEditedText, handleEditClick, handleSaveEdit, handleKeyPress, handleInputBlur } = useClickToEdit(listTitle);

  return (
    <div className="w-full max-w-md mx-auto p-4 bg-white rounded-lg shadow-lg mb-4">
      <h1
        className={`pl-3 text-2xl font-bold mb-2 cursor-pointer p-0 rounded-md bg-gray-200 ${isEditing ? 'border-b border-gray-200' : ''}`}
        onClick={handleEditClick}
      >
        {isEditing ? (
          <input
            type="text"
            value={editedText}
            onChange={(e) => setEditedText(e.target.value)}
            onBlur={handleInputBlur}
            onKeyDown={handleKeyPress}
            className="form-input h-8 px-2 focus:ring-blue-500 outline-none"
          />
        ) : (
          editedText
        )}
      </h1>
      <ul className="w-full list-none p-0 rounded-lg bg-gray-100">
        {tasks.map((task, index) => (
          <TaskItem
            key={index}
            task={task}
            index={index}
            completeTask={completeTask}
            incompleteTask={incompleteTask}
            deleteTask={deleteTask}
          />
        ))}
      </ul>
    </div>
  );
};

export default TaskList;
