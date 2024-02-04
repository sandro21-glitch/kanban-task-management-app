import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setOpenTaskOptions } from "../modals/modalsSlice";

type SingleTaskTypes = {
  taskName: string;
  completedLength: number;
  subtasksLength: number;
  taskDesc?: string;
  subtasks: { subtaskName: string; subtaskId: string; isCompleted: boolean }[];
  todoId: string;
  taskId: string;
};

const SingelTask = ({
  taskName,
  completedLength,
  subtasksLength,
  taskDesc,
  subtasks,
  todoId,
  taskId,
}: SingleTaskTypes) => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const task = {
    taskDesc,
    taskName,
    taskId,
    todoId,
    subtasks,
  };
  const handleOpenTaskOptions = () => {
    dispatch(setOpenTaskOptions({ isOpen: true, task }));
  };
  return (
    <div>
      <div
        onClick={handleOpenTaskOptions}
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
          {completedLength} of {subtasksLength}
        </p>
      </div>
    </div>
  );
};

export default SingelTask;
