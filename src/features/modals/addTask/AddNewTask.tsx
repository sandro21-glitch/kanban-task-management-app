import { useAppSelector } from "../../../hooks/reduxHooks";
import TaskName from "./TaskName";
import TaskDescription from "./TaskDescription";
import Subtasks from "./Subtasks";
import SelectCol from "./SelectCol";

const AddNewTask = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  return (
    <div
      className={`min-w-[90vw] sm:min-w-[670px] ${
        darkMode ? "bg-darkMode" : "bg-white"
      } p-7 rounded-lg`}
    >
      <h3
        className={`${
          darkMode ? "text-white" : "text-black"
        } font-semibold mb-5 text-[1.3rem]`}
      >
        Add New Task
      </h3>
      <div className="flex flex-col gap-5">
        <TaskName />
        <TaskDescription />
        <Subtasks />
        <SelectCol />
      </div>
    </div>
  );
};

export default AddNewTask;
