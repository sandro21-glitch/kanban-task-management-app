import { useTasksContext } from "../context/TasksContext";
import iconVertical from "/assets/icon-vertical-ellipsis.svg";

type TasksHeaderTypes = {
  setAddNewTask: (bool: boolean) => void;
};

const TasksHeader = ({ setAddNewTask }: TasksHeaderTypes) => {
  const { state } = useTasksContext();
  const { board, activeBoard } = state;

  if (activeBoard == null) return;
  return (
    <div className="w-full flex items-center justify-between">
      <h4 className="font-bold ml-12">{board[activeBoard].boardName}</h4>
      <div className="flex items-center gap-5 mr-5">
        <button
          onClick={() => setAddNewTask(true)}
          className="capitalize bg-mediumPurple text-white p-[10px]
         rounded-3xl font-bold hover:opacity-75 transition-opacity ease-in duration-150"
        >
          + Add new task
        </button>
        <button>
          <img
            src={iconVertical}
            alt="icon vertical"
            className="w-[5px] h-[20px]"
          />
        </button>
      </div>
    </div>
  );
};
export default TasksHeader;
