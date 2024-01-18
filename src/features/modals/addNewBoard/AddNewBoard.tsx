import { useState } from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import AddNewColBtn from "./AddNewColBtn";
import BoardName from "./BoardName";
import ColumnList from "./ColumnList";
import CreateNewBoardBtn from "./CreateNewBoardBtn";

const AddNewBoard = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const [boardName, setBoardName] = useState<string>("");
  const [boardCols, setBoardCols] = useState<string[]>(["Todo","Doing"]);

  return (
    <form>
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
