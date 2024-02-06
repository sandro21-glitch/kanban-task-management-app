import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { deleteBoard, selectActiveBoard } from "../../board/boardsSlice";
import { setOpenDeletePopup } from "../modalsSlice";

const DeleteBoard = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const dispatch = useAppDispatch();
  const activeBoard = useAppSelector(selectActiveBoard);
  const handleDeleteBoard = () => {
    dispatch(deleteBoard());
    dispatch(setOpenDeletePopup(false));
  };
  if (!activeBoard) return null;
  return (
    <div
      className={`w-[90vw] md:w-[45rem] ${
        darkMode ? "bg-darkMode" : "bg-white"
      } p-7 rounded-lg `}
    >
      <h1 className="text-red-500 text-[1.2rem] font-bold mb-5">
        Delete this Board?
      </h1>
      <p className="text-[#828fa3] text-[.9rem] mb-5">
        Are you sure you want to delete the "{activeBoard.name}" board? This action
        will remove all columns and tasks and cannot be reversed.
      </p>
      <div className="w-full flex items-center gap-5">
        <button
          onClick={handleDeleteBoard}
          className="w-full bg-red-500 py-2 rounded-full text-white capitalize font-bold"
        >
          clear
        </button>
        <button
          onClick={() => dispatch(setOpenDeletePopup(false))}
          className={`w-full ${
            darkMode ? "bg-white" : "bg-lightPurple"
          }   py-2 rounded-full capitalize font-bold text-mediumPurple`}
        >
          cancel
        </button>
      </div>
    </div>
  );
};

export default DeleteBoard;
