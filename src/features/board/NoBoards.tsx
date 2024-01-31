import { useAppDispatch } from "../../hooks/reduxHooks";
import { setAddBoardModal } from "../modals/modalsSlice";

const NoBoards = () => {
  const dispatch = useAppDispatch();
  return (
    <div className="flex flex-col justify-center items-center mx-auto">
      <h2 className="text-center font-bold text-lightGray">
        There are no boards available.
        <br /> Create a new board to get started
      </h2>
      <button
        className="mt-5 bg-mediumPurple p-3 rounded-full text-white font-bold"
        onClick={() => dispatch(setAddBoardModal(true))}
      >
        Create New Board
      </button>
    </div>
  );
};

export default NoBoards;
