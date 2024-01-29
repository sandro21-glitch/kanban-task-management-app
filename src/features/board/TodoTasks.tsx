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
      <div className="flex gap-2 items-center">
        <div className="bg-red-900 w-[15px] h-[15px] rounded-full"></div>
        <div className="font-bold tracking-[.1rem] text-[.9rem]">
          {todoName} ({todoTasks.length})
        </div>
      </div>
      <TaskDetails todoTasks={todoTasks} />
    </li>
  );
};

export default TodoTasks;
