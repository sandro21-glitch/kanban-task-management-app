import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setOpenTaskOptions } from "../modals/modalsSlice";
import TaskOptions from "../modals/taskSubtasks/TaskOptions";

type SingleTaskTypes = {
  taskName: string;
  completedLength: number;
  subtasksLength: number;
  taskDesc?: string;
  subtasks: { subtaskName: string; isCompleted: boolean }[];
  todoId: string;
};

const SingelTask = ({
  taskName,
  completedLength,
  subtasksLength,
  taskDesc,
  subtasks,
  todoId,
}: SingleTaskTypes) => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const [localOpenTaskOptions, setLocalOpenTaskOptions] = useState(false);

  return (
    <div
      onClick={() => {
        dispatch(setOpenTaskOptions(true));
        setLocalOpenTaskOptions(true);
      }}
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
      {localOpenTaskOptions && (
        <TaskOptions
          localOpenTaskOptions={localOpenTaskOptions}
          setLocalOpenTaskOptions={setLocalOpenTaskOptions}
          todoId={todoId}
          taskName={taskName}
          subtasks={subtasks}
          taskDesc={taskDesc}
        />
      )}
    </div>
  );
};

export default SingelTask;
