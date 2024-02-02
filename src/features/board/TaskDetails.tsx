import SingelTask from "./SingelTask";

type TaskDetailsTypes = {
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
  todoId: string;
};
const TaskDetails = ({ todoTasks, todoId }: TaskDetailsTypes) => {
  if (todoTasks.length === 0) return null;
  return (
    <div>
      {todoTasks.map((task, index) => {
        const { taskName, subtasks, taskDesc, taskId } = task;
        // Filter completed subtasks
        const completedSubtasks = subtasks.filter(
          (subtask) => subtask.isCompleted
        );
        return (
          <SingelTask
            key={index}
            todoId={todoId}
            taskName={taskName}
            taskId={taskId}
            completedLength={completedSubtasks.length}
            subtasksLength={subtasks.length}
            subtasks={subtasks}
            taskDesc={taskDesc}
          />
        );
      })}
    </div>
  );
};

export default TaskDetails;
