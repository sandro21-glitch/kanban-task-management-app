import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { openEditTaskModal, setOpenTaskOptions } from "../../modalsSlice";

type EditTaskBtnTypes = {
  taskId: string;
  todoId: string;
};

const EditTaskBtn = ({ taskId, todoId }: EditTaskBtnTypes) => {
  const dispatch = useAppDispatch();

  const handleEditTask = () => {
    dispatch(setOpenTaskOptions({ isOpen: false, task: null }));
    dispatch(openEditTaskModal({ isOpen: true, taskId, todoId }));
  };
  return (
    <button
      type="button"
      onClick={handleEditTask}
      className="text-[.8rem] leading-[23px] text-gray-500 font-semibold w-full text-start hover:text-gray-700 transition-colors ease-linear duration-150"
    >
      Edit Task
    </button>
  );
};

export default EditTaskBtn;
