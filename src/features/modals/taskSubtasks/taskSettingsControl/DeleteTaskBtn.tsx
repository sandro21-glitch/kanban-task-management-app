import { useAppDispatch } from "../../../../hooks/reduxHooks";
import { deleteTask } from "../../../board/boardsSlice";
import { setOpenTaskOptions } from "../../modalsSlice";

type DeleteTaskTypes = {
  taskId: string;
};
const DeleteTaskBtn = ({ taskId }: DeleteTaskTypes) => {
  const dispastch = useAppDispatch();
  const handleRemoveTask = () => {
    dispastch(deleteTask(taskId));
    dispastch(setOpenTaskOptions({ isOpen: false, task: null }));
  };
  return (
    <button
      onClick={handleRemoveTask}
      className="text-[.8rem] leading-[23px] text-red-500 font-semibold w-full text-start"
    >
      Delete Task
    </button>
  );
};

export default DeleteTaskBtn;
