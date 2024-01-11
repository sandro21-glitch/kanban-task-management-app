import { useTasksContext } from "../../context/TasksContext";
import SelectTaskStatus from "./new task options/SelectTaskStatus";
import Subtasks from "./new task options/Subtasks";
import TaskDescription from "./new task options/TaskDescription";

const NewTaskPopup = () => {
  const state = useTasksContext();
  const { board } = state.state;
  console.log(board);

  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center z-[999]">
      <form className="w-full">
        <div className="absolute inset-0 z-[99] bg-black opacity-50"></div>
        <div className="z-[999] relative opacity-100 w-[40rem] p-8 mx-auto bg-white flex justify-center items-start flex-col rounded-md">
          <h2 className="text-[1rem] font-bold mb-7">Add New Task</h2>
          <TaskDescription />
          <Subtasks />
          <SelectTaskStatus />
          <button
            type="submit"
            className="bg-mediumPurple text-white font-bold w-full py-2 rounded-2xl hover:opacity-70"
          >
            Create Task
          </button>
        </div>
      </form>
    </div>
  );
};

export default NewTaskPopup;
