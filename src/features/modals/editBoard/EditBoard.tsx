// import { useState } from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import {
  editBoardName,
  editedBoardCols,
  removeBoardCols,
  selectActiveBoard,
} from "../../board/boardsSlice";
import EditBoardCols from "./EditBoardCols";
import EditBoardName from "./EditBoardName";
import EditBoardBtn from "./EditBoardBtn";
import AddNewColumnBtn from "./AddNewColumnBtn";
import { setEditBoardModal } from "../modalsSlice";
const EditBoard = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const activeBoard = useAppSelector(selectActiveBoard);
  const [editedBoardName, setEditedBoardName] = useState<string>("");
  const [editBoardCols, setEditBoardCols] = useState<string[]>([""]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  if (!activeBoard) return null;
  const { name, boardTodos } = activeBoard;

  const editBoard = () => {
    try {
      dispatch(editedBoardCols(editBoardCols));
      dispatch(editBoardName(editedBoardName));
      dispatch(removeBoardCols());
      dispatch(setEditBoardModal(false));
    } catch (error) {
      console.error("An error occurred while editing the board:", error);
    }
  };
  const handleEditBoard = () => {
    setFormSubmitted(true);
    // check if there is any empty column in editBoardCols
    const hasEmptyColumn = editBoardCols.some((col) => col === "");
    if (hasEmptyColumn || !editedBoardName) {
      return;
    }
    editBoard();
  };

  return (
    <div
      className={`min-w-[90vw] sm:min-w-[700px] ${
        darkMode ? "bg-darkMode" : "bg-white"
      } p-7 rounded-lg`}
    >
      <h3
        className={`${
          darkMode ? "text-white" : "text-black"
        } font-semibold mb-5 text-[1.3rem]`}
      >
        Edit Board
      </h3>
      <EditBoardName
        name={name}
        editedBoardName={editedBoardName}
        setEditedBoardName={setEditedBoardName}
        submitted={formSubmitted}
      />
      <label className="text-lightGray font-semibold text-[.8rem] mb-1">
        Board Columns
      </label>
      <EditBoardCols
        editBoardCols={editBoardCols}
        setEditBoardCols={setEditBoardCols}
        boardTodos={boardTodos}
        submitted={formSubmitted}
      />
      <AddNewColumnBtn
        editBoardCols={editBoardCols}
        setEditBoardCols={setEditBoardCols}
      />
      <EditBoardBtn handleEditBoard={handleEditBoard} />
    </div>
  );
};

export default EditBoard;
