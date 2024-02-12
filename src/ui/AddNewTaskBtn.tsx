import { setNewTaskModal } from "../features/modals/modalsSlice";
import { useAppDispatch } from "../hooks/reduxHooks";
import addTask from "/assets/icon-add-task-mobile.svg";
const AddNewTaskBtn = () => {
  const dispatch = useAppDispatch();
  return (
    <button
      onClick={() => dispatch(setNewTaskModal(true))}
      className="bg-mediumPurple sm:text-xs md:text-[1rem] sm:w-[110px] md:w-[164px] w-[3em] h-[2em] sm:h-[3em]
       rounded-full text-white font-bold normal-case flex items-center justify-center"
    >
      <span className="hidden sm:inline">+ Add new task</span>
      <span className="sm:hidden">
        <img src={addTask} alt="add task icon" />
      </span>
    </button>
  );
};

export default AddNewTaskBtn;
