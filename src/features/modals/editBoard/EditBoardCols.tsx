import { useEffect } from "react";
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
  editBoardCols: string[];
  setEditBoardCols: React.Dispatch<React.SetStateAction<string[]>>;
};

const EditBoardCols = ({
  editBoardCols,
  setEditBoardCols,
  boardTodos,
}: BoardColsTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);

  useEffect(() => {
    setEditBoardCols(boardTodos.map((todo) => todo.todoName));
  }, [boardTodos]);
  const handleEditBoardCols = (index: number, name: string) => {
    setEditBoardCols((prevCols) => {
      const updatedCols = [...prevCols];
      updatedCols[index] = name;
      return updatedCols;
    });
  };
  return (
    <ul className="flex flex-col gap-3">
      {editBoardCols.map((col, index) => {
        return (
          <li key={index} className="flex items-center">
            <input
              type="text"
              placeholder="e.g Todo"
              value={col}
              onChange={(e) => handleEditBoardCols(index, e.target.value)}
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
