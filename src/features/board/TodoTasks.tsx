import TaskDetails from "./TaskDetails";

type TodoTasksTypes = {
  todo: {
    todoName: string;
    todoTasks: {
      taskName: string;
      taskDesc: string;
      subtasks: {
        subtaskName: string;
        isCompleted: boolean;
      }[];
    }[];
  };
};

const TodoTasks = ({ todo }: TodoTasksTypes) => {
  const { todoName, todoTasks } = todo;

  return (
    <li className="min-w-[17.5em]">
      <div>
        {todoName} ({todoTasks.length})
      </div>
      <TaskDetails todoTasks={todoTasks} />
    </li>
  );
};

export default TodoTasks;
