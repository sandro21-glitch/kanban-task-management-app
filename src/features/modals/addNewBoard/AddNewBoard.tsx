import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import AddNewColBtn from "./AddNewColBtn";
import BoardName from "./BoardName";
import ColumnList from "./ColumnList";
import CreateNewBoardBtn from "./CreateNewBoardBtn";
import { addNewBoard } from "../../board/tasksSlice";

const AddNewBoard = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const [boardName, setBoardName] = useState<string>("");
  const [boardCols, setBoardCols] = useState<string[]>(["Todo", "Doing"]);

  const handleAddNewBoard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault(); // Prevent the default form submission behavior
    if (!boardName) {
      alert("Add board name");
      return; // Stop further execution if boardName is not provided
    }
    dispatch(addNewBoard({ boardName, boardCols }));
  };

  return (
    <form onSubmit={handleAddNewBoard}>
      <div
        className={`min-w-[90vw] sm:min-w-[570px] ${
          darkMode ? "bg-darkMode" : "bg-white"
        } p-7 rounded-lg`}
      >
        <h3
          className={`${
            darkMode ? "text-white" : "text-black"
          } font-semibold mb-5 text-[1.3rem]`}
        >
          Add new board
        </h3>
        <BoardName setBoardName={setBoardName} boardName={boardName} />
        {/* board cols */}
        <ColumnList boardCols={boardCols} setBoardCols={setBoardCols} />
        <AddNewColBtn boardCols={boardCols} setBoardCols={setBoardCols} />
        <CreateNewBoardBtn />
      </div>
    </form>
  );
};

export default AddNewBoard;
