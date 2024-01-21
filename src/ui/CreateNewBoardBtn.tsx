import { setAddBoardModal } from "../features/modals/modalsSlice";
import { useAppDispatch } from "../hooks/reduxHooks";
import boardIcon from "/assets/board-icon.svg";

const CreateNewBoardBtn = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(setAddBoardModal(true))}
      className="text-mediumPurple font-bold flex items-center gap-5 mt-5"
    >
      <img src={boardIcon} alt="board icon" className="ml-5 gray-svg" />+ Create
      New Board
    </button>
  );
};

export default CreateNewBoardBtn;
