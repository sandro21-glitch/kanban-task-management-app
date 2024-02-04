import { useAppSelector } from "../../../hooks/reduxHooks";
import OptionsHeader from "./OptionsHeader";
import SubtasksList from "./SubtasksList";
import SubtasksCurrStatus from "./SubtasksCurrStatus";

type TaskOptionTypes = {
  taskName: string;
  taskDesc?: string;
  subtasks: { subtaskId: string; subtaskName: string; isCompleted: boolean }[];
  todoId: string;
  taskId: string;
};

const TaskOptions = ({
  taskName,
  taskDesc,
  subtasks,
  todoId,
  taskId,
}: TaskOptionTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const completedSubs = subtasks.filter((task) => task.isCompleted).length;
  
  return (
    <div
      className={`min-w-[90vw] sm:min-w-[500px] ${
        darkMode ? "bg-darkMode" : "bg-white"
      } p-7 rounded-lg cursor-default`}
    >
      <OptionsHeader taskName={taskName} />
      <p className={`${darkMode ? 'text-white' : 'text-black' } text-[.8rem] mb-5 cursor-text`}>
        {taskDesc ? taskDesc : ""}
      </p>
      <p className={`${darkMode ? 'text-white' : 'text-black'} text-[.75rem] font-bold mb-2`}>
        Subtasks ({completedSubs} of {subtasks.length})
      </p>
      <SubtasksList subtasks={subtasks} todoId={todoId} />
      <SubtasksCurrStatus todoId={todoId} taskId={taskId} />
    </div>
  );
};

export default TaskOptions;
