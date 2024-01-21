// import { useState } from "react";
import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { editBoardName, selectActiveBoard } from "../../board/boardsSlice";
import EditBoardCols from "./EditBoardCols";
import EditBoardName from "./EditBoardName";
const EditBoard = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const activeBoard = useAppSelector(selectActiveBoard);
  const [editedBoardName, setEditedBoardName] = useState<string>("");
  if (!activeBoard) return null;
  const { name, boardTodos } = activeBoard;
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
      />
      <label className="text-lightGray font-semibold text-[.8rem] mb-1">
        Board Columns
      </label>
      <EditBoardCols boardTodos={boardTodos} />
      <button
        type="button"
        onClick={() => dispatch(editBoardName(editedBoardName))}
      >
        Save Changes
      </button>
    </div>
  );
};

export default EditBoard;
