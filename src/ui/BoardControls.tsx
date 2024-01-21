import EditBoardPopup from "../features/modals/editBoard/EditBoardPopup";
import { openEditBoardPopModal } from "../features/modals/modalsSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import iconVert from "/assets/icon-vertical-ellipsis.svg";

const BoardControls = () => {
  const dispatch = useAppDispatch();
  const { openEditPopup } = useAppSelector((store) => store.modals);

  return (
    <button
      className="relative"
      onClick={() => dispatch(openEditBoardPopModal(!openEditPopup))}
    >
      <img src={iconVert} alt="icon vertical ellipsis" />
      {openEditPopup && <EditBoardPopup />}
    </button>
  );
};

export default BoardControls;
