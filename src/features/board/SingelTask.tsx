import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setOpenTaskOptions } from "../modals/modalsSlice";

type SingleTaskTypes = {
  taskName: string;
  completedLength: number;
  subtasksLength: number;
};
const SingelTask = ({
  taskName,
  completedLength,
  subtasksLength,
}: SingleTaskTypes) => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  return (
    <div
      onClick={() => dispatch(setOpenTaskOptions(true))}
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
  );
};

export default SingelTask;
