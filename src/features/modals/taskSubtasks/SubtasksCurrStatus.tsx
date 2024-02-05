import { useEffect, useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { selectActiveBoard } from "../../board/boardsSlice";
import SingleTodoList from "./SingleTodoList";
import { setOpenTaskOptions } from "../modalsSlice";

type SubtasksStatusTypes = {
  todoId: string;
  taskId: string;
};
type TodoType = {
  name: string;
  id: string;
};
const SubtasksCurrStatus = ({ todoId, taskId }: SubtasksStatusTypes) => {
  const activeBoard = useAppSelector(selectActiveBoard);
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTodo, setActiveTodo] = useState<TodoType>({ name: "", id: "" });
  const disaptch = useAppDispatch();
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const getTodoNameById = (id: string) => {
    const todo = boardTodos.find((todo) => todo.todoId === id);
    return todo?.todoName;
  };
  useEffect(() => {
    setActiveTodo((prev) => ({
      ...prev,
      id: todoId,
    }));
  }, [todoId]);
  if (!activeBoard) return null;
  const { boardTodos } = activeBoard;
  return (
    <div>
      <p
        className={`${
          darkMode ? "text-white" : "text-black"
        } mb-2 text-[.8rem] font-bold`}
      >
        Current Status
      </p>

      <button
        type="button"
        className="relative inline-block text-left w-full border border-gray-400 cursor-pointer
          hover:border-mediumPurple rounded-md bg-transparent transition-all ease-in duration-150 py-2 px-3 text-sm"
        onClick={toggleMenu}
      >
        <span className={`${darkMode ? "text-white" : "text-black"} font-bold`}>
          {activeTodo.name ? activeTodo.name : getTodoNameById(todoId)}
        </span>
        {menuOpen && (
          <ul
            onClick={() =>
              disaptch(setOpenTaskOptions({ isOpen: false, task: null }))
            }
            className="absolute right-0 z-10 mt-4 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
          >
            {boardTodos.map((todo) => {
              const { todoId, todoName } = todo;
              return (
                <SingleTodoList
                  key={todoId}
                  todoId={todoId}
                  todoName={todoName}
                  taskId={taskId}
                  setActiveTodo={setActiveTodo}
                  activeTodoId={activeTodo?.id}
                />
              );
            })}
          </ul>
        )}
      </button>
    </div>
  );
};

export default SubtasksCurrStatus;
