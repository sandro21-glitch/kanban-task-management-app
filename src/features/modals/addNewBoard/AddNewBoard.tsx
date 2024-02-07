import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import AddNewColBtn from "./AddNewColBtn";
import BoardName from "./BoardName";
import ColumnList from "./ColumnList";
import CreateNewBoardBtn from "./CreateNewBoardBtn";
import { addNewBoard } from "../../board/boardsSlice";
import { setAddBoardModal } from "../modalsSlice";

const AddNewBoard = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const [boardName, setBoardName] = useState<string>("");
  const [boardCols, setBoardCols] = useState<string[]>(["Todo", "Doing"]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const handleAddNewBoard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setFormSubmitted(true);
    const hasAnyEmptyCol = boardCols.some((col) => col === "");
    if (!boardName || hasAnyEmptyCol) {
      return;
    }
    dispatch(addNewBoard({ boardName, boardCols }));
    dispatch(setAddBoardModal(false));
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
        <BoardName
          setBoardName={setBoardName}
          boardName={boardName}
          submitted={formSubmitted}
        />
        {/* board cols */}
        <ColumnList
          submitted={formSubmitted}
          boardCols={boardCols}
          setBoardCols={setBoardCols}
        />
        <AddNewColBtn boardCols={boardCols} setBoardCols={setBoardCols} />
        <CreateNewBoardBtn />
      </div>
    </form>
  );
};

export default AddNewBoard;
