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
        const { taskName, subtasks, taskDesc } = task;
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
            subtasks={subtasks}
            taskDesc={taskDesc}
          />
        );
      })}
    </div>
  );
};

export default TaskDetails;
