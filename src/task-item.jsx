// This component will represent an individual task item.

import { useRef } from 'react';
import useClickToEdit from './useClickToEdit';

const TaskItem = ({ task, index, completeTask, incompleteTask, deleteTask }) => {
  const { isEditing, editedText, setEditedText, handleEditClick, handleSaveEdit, handleKeyPress } = useClickToEdit(task.name);
  const inputRef = useRef(null);
  const shouldRetainFocus = useRef(false);

  const handleCheckboxChange = () => {
    if (!isEditing) {
      if (task.completed) {
        incompleteTask(index);
      } else {
        completeTask(index);
      }
    }
  };

  const handleInputBlur = () => {
    if (editedText.trim().length === 0 && shouldRetainFocus.current) {
      inputRef.current.focus();
    } else {
      handleSaveEdit();
    }
  };

  const handleSpanClick = () => {
    handleEditClick();
    shouldRetainFocus.current = true;
  };

  return (
    <li className="flex justify-between items-center border-b border-gray-200 rounded-2xl py-4 px-4 bg-white hover:bg-gray-50">
      <label className="inline-flex items-center">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={handleCheckboxChange}
          className="form-checkbox h-5 w-5 text-blue-500 focus:ring-blue-500"
        />
        <span
          className={`ml-2 cursor-pointer ${task.completed ? 'line-through text-gray-500' : ''}`}
          onClick={handleSpanClick}
        >
          {isEditing ? (
            <input
              type="text"
              value={editedText}
              onChange={(e) => setEditedText(e.target.value)}
              onBlur={handleInputBlur} // Use handleInputBlur directly
              onKeyDown={handleKeyPress}
              ref={inputRef}
              className="form-input h-8 px-2 focus:ring-blue-500"
              disabled={task.completed}
            />
          ) : (
            <span className="">
              {editedText}
            </span>
          )}
        </span>
      </label>
      <div className="relative">
        <span
          onClick={() => deleteTask(index)}
          className="absolute top-0 right-0 transform -translate-y-1/2 cursor-pointer text-red-500 hover:text-red-700"
        >
          x
        </span>
      </div>
    </li>
  );
};

export default TaskItem;
