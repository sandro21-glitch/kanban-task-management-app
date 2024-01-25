import { setNewTaskModal } from "../features/modals/modalsSlice";
import { useAppDispatch } from "../hooks/reduxHooks";

const AddNewTaskBtn = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(setNewTaskModal(true))}
      className="bg-mediumPurple w-[164px] h-[3em] rounded-full text-white font-bold normal-case"
    >
      + Add new task
    </button>
  );
};

export default AddNewTaskBtn;
