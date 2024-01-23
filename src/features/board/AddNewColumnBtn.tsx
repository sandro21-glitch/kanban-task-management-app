import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setEditBoardModal } from "../modals/modalsSlice";

const AddNewColumnBtn = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(setEditBoardModal(true))}
      className={`min-w-[17.5em] 
      flex justify-center items-center
      ${darkMode ? "bg-gradientGray" : "bg-[#e9effa8e]"}
      hover:scale-[1.02] transition-all ease-in duration-150 rounded-lg`}
    >
      <span className="text-[1.5rem] font-bold text-lightGray">
        + New Column
      </span>
    </button>
  );
};

export default AddNewColumnBtn;
