import SingelTask from "./SingelTask";

type TaskDetailsTypes = {
  todoTasks: {
    taskName: string;
    taskDesc: string;
    subtasks: {
      subtaskName: string;
      isCompleted: boolean;
    }[];
  }[];
};
const TaskDetails = ({ todoTasks }: TaskDetailsTypes) => {
  if (todoTasks.length === 0) return null;
  return (
    <div>
      {todoTasks.map((task, index) => {
        const { taskName, subtasks } = task;
        // Filter completed subtasks
        const completedSubtasks = subtasks.filter(
          (subtask) => subtask.isCompleted
        );
        return (
          <SingelTask
            key={index}
            taskName={taskName}
            completedLength={completedSubtasks.length}
            subtasksLength={subtasks.length}
          />
        );
      })}
    </div>
  );
};

export default TaskDetails;
