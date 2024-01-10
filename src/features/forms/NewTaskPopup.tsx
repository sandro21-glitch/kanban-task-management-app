import SelectTaskStatus from "./new task options/SelectTaskStatus";
import Subtasks from "./new task options/Subtasks";
import TaskDescription from "./new task options/TaskDescription";

const NewTaskPopup = () => {
  return (
    <div className="absolute inset-0 w-full h-full flex justify-center items-center bg-black z-[999]">
      <form className="w-full">
        <div className="z-[9999] opacity-100 w-[40rem] p-8 mx-auto bg-white flex justify-center items-start flex-col rounded-md">
          <h2 className="text-[1rem] font-bold mb-7">Add New Task</h2>
          <TaskDescription />
          <Subtasks />
          <SelectTaskStatus />
        </div>
      </form>
    </div>
  );
};

export default NewTaskPopup;
