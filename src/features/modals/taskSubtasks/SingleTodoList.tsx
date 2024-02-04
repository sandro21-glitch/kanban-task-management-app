import { useAppDispatch } from "../../../hooks/reduxHooks";
import { assignTodoTaskToColumn } from "../../board/boardsSlice";
import { setOpenTaskOptions } from "../modalsSlice";

type SingleTodoTypes = {
  todoId: string;
  todoName: string;
  taskId: string;
  setActiveTodo: React.Dispatch<
    React.SetStateAction<{ id: string; name: string }>
  >;
};

const SingleTodoList = ({
  todoId,
  todoName,
  setActiveTodo,
  taskId,
}: SingleTodoTypes) => {
  const dispatch = useAppDispatch();
  const handleAssingNewCol = () => {
    setActiveTodo((prev) => ({
      ...prev,
      name: todoName,
      id: todoId,
    }));
    dispatch(assignTodoTaskToColumn({ todoId, taskId }));
    dispatch(setOpenTaskOptions({ isOpen: false, task: null }));
  };

  return (
    <li
      key={todoId}
      onClick={handleAssingNewCol}
      className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
    >
      {todoName}
    </li>
  );
};

export default SingleTodoList;
