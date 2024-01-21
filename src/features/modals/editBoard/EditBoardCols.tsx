import { useAppSelector } from "../../../hooks/reduxHooks";
import crossIcon from "/assets/icon-cross.svg";

type BoardColsTypes = {
  boardTodos: {
    todoName: string;
    todoTasks: {
      taskName: string;
      taskDesc: string;
      subtasks: {
        subtaskName: string;
        isCompleted: boolean;
      }[];
    }[];
  }[];
};

const EditBoardCols = ({ boardTodos }: BoardColsTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
console.log(boardTodos)
  return (
    <ul className="flex flex-col gap-3">
      {boardTodos.map((col, index) => {
        return (
          <li key={index} className="flex items-center">
            <input
              type="text"
              placeholder="e.g Todo"
              value={col.todoName}
              className={`w-full outline-none border border-borderColor p-2 text-[.9rem] rounded-md ${
                darkMode ? "bg-darkMode text-white" : "bg-white text-black"
              }`}
            />
            <button type="button" className="ml-5">
              <img src={crossIcon} alt="remove icon" />
            </button>
          </li>
        );
      })}
    </ul>
  );
};

export default EditBoardCols;
