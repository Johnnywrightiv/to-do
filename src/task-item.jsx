// This component will represent an individual task item.

const TaskItem = ({ task, index, completeTask, deleteTask }) => {
  const handleCompleteTask = () => {
    completeTask(index);
  };

  const handleDeleteTask = () => {
    deleteTask(index);
  };

  return (
    <li className="flex justify-between items-center border-b border-gray-200 rounded-2xl py-5">
      <div className="ml-3">
        <input
          type="checkbox"
          checked={task.completed}
          onChange={() => {
            task.completed ? completeTask(index, false) : completeTask(index, true);
          }}
        />
        <span className={task.completed ? 'line-through ml-2' : 'ml-2'}>{task.name}</span>
      </div>
      <button onClick={handleDeleteTask} className="text-red-500 mr-3">
        Delete
      </button>
    </li>
  );
};

export default TaskItem;
