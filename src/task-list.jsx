import TaskItem from './task-item';

const TaskList = ({ tasks, completeTask, deleteTask }) => {
  return (
    <ul className="w-full list-none p-0">
      {tasks.map((task, index) => (
        <TaskItem
          key={index}
          task={task}
          index={index}
          completeTask={completeTask}
          deleteTask={deleteTask}
        />
      ))}
    </ul>
  );
};

export default TaskList;
