import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setEditBoardModal } from "../modals/modalsSlice";

const BoardNoCols = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const dispatch = useAppDispatch();
  return (
    <div
      className={`${
        darkMode ? "bg-boardColorDark" : "bg-white"
      } w-full h-[90vh] flex flex-col gap-5 justify-center items-center`}
    >
      <h3 className="text-lightGray font-bold mb-5">
        This board is empty. Create a new column to get started.
      </h3>
      <button
        onClick={() => dispatch(setEditBoardModal(true))}
        className="text-white bg-mediumPurple w-[174px] h-[3em] rounded-full text-[1rem]
        font-semibold hover:bg-[#a8a4ff] transition-colors ease-in duration-150"
      >
        + Add a column
      </button>
    </div>
  );
};

export default BoardNoCols;
