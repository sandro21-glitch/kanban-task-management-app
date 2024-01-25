import { useAppSelector } from "../../hooks/reduxHooks";

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
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  if (todoTasks.length === 0) return null;
  return (
    <>
      {todoTasks.map((task, index) => {
        const { taskName, subtasks } = task;
        // Filter completed subtasks
        const completedSubtasks = subtasks.filter(
          (subtask) => subtask.isCompleted
        );
        return (
          <div
            key={index}
            className={`w-[280px] ${
              darkMode ? "bg-darkMode" : "bg-white"
            } mt-5 py-6 px-4 rounded-lg shadow-xl cursor-pointer group `}
          >
            <p
              className={`group-hover:text-mediumPurple
             ${
               darkMode ? "text-white" : "text-black"
             } text-[.9rem] font-semibold transition-colors ease-in duration-150`}
            >
              {taskName}
            </p>
            <p>
              {completedSubtasks.length} of {subtasks.length}
            </p>
          </div>
        );
      })}
    </>
  );
};

export default TaskDetails;
