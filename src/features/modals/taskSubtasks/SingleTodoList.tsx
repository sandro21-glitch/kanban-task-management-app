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
  activeTodoId: string;
};

const SingleTodoList = ({
  todoId,
  todoName,
  setActiveTodo,
  taskId,
  activeTodoId,
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
      className={`${
        todoId === activeTodoId ? "text-mediumPurple" : "text-gray-500"
      } font-bold block px-4 py-2 text-sm cursor-pointer`}
    >
      {todoName}
    </li>
  );
};

export default SingleTodoList;
