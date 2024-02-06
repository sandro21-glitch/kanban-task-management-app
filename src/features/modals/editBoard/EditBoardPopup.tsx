import { useAppDispatch } from "../../../hooks/reduxHooks";
import { deleteBoard } from "../../board/boardsSlice";
import { setEditBoardModal, setOpenClearPopup } from "../modalsSlice";

const EditBoardPopup = () => {
  const dispatch = useAppDispatch();
  return (
    <ul
      className="bg-white absolute right-0 top-[4rem] shadow-lg rounded-lg z-[9999] w-[192px] p-3
      flex flex-col items-start gap-5"
    >
      <li
        onClick={() => dispatch(setEditBoardModal(true))}
        className="text-[.8rem] font-medium text-lightGray hover:text-black transition-colors ease-in duration-150"
      >
        Edit Baord
      </li>
      <li
        onClick={() => dispatch(setOpenClearPopup(true))}
        className="text-[.8rem] font-medium text-lightGray hover:text-black transition-colors ease-in duration-150"
      >
        Clear Board
      </li>
      <li onClick={() => dispatch(deleteBoard())} className="text-[.8rem] font-medium text-red-500">Delete Board</li>
      <li className="text-[.8rem] font-medium text-red-500">Reset Boards</li>
    </ul>
  );
};

export default EditBoardPopup;
