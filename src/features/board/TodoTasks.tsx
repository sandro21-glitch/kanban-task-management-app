import { useState } from "react";
import DroppableArea from "../../ui/DroppableArea";
import TaskDetails from "./TaskDetails";
import randomColor from "randomcolor";
type TodoTasksTypes = {
  todo: {
    todoId: string;
    todoName: string;
    todoTasks: {
      taskName: string;
      taskDesc: string;
      taskId: string;
      subtasks: {
        subtaskName: string;
        subtaskId: string;
        isCompleted: boolean;
      }[];
    }[];
  };
};
const TodoTasks = ({ todo }: TodoTasksTypes) => {
  const { todoName, todoTasks, todoId } = todo;
  const [newTaskColor, setNewTaskColor] = useState<string>("");
  if (!newTaskColor) {
    setNewTaskColor(randomColor());
  }
  return (
    <DroppableArea todoId={todoId}>
      <div className="min-w-[17.5em]">
        <div className="flex gap-2 items-center">
          <div
            style={{ backgroundColor: newTaskColor }}
            className="w-[15px] h-[15px] rounded-full"
          ></div>
          <div className="font-bold tracking-[.1rem] text-[.9rem]">
            {todoName} ({todoTasks.length})
          </div>
        </div>
        <TaskDetails todoTasks={todoTasks} todoId={todoId} />
      </div>
    </DroppableArea>
  );
};

export default TodoTasks;
