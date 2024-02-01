import { useState } from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import { selectActiveBoard } from "../../board/boardsSlice";

type SubtasksStatusTypes = {
  todoId: string;
};

const SubtasksCurrStatus = ({ todoId }: SubtasksStatusTypes) => {
  const activeBoard = useAppSelector(selectActiveBoard);
  const [menuOpen, setMenuOpen] = useState(false);
  const [activeTodo, setActiveTodo] = useState<string>("");
  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };
  const getTodoNameById = (id: string) => {
    const todo = boardTodos.find((todo) => todo.todoId === id);
    return todo?.todoName;
  };
  if (!activeBoard) return null;
  const { boardTodos } = activeBoard;
  return (
    <div>
      <p className="mb-2 text-[.8rem] font-bold">Current Status</p>

      <button
        type="button"
        className="relative inline-block text-left w-full border border-gray-400 cursor-pointer
          hover:border-mediumPurple rounded-md bg-transparent transition-all ease-in duration-150 py-2 px-3 text-sm"
        id="menu-button"
        aria-expanded={menuOpen}
        aria-haspopup="true"
        onClick={toggleMenu}
      >
        {activeTodo ? activeTodo : getTodoNameById(todoId)}
        {menuOpen && (
          <ul
            className="absolute right-0 z-10 mt-4 w-full origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none"
            role="menu"
            aria-orientation="vertical"
            aria-labelledby="menu-button"
            tabIndex={-1}
          >
            {boardTodos.map((todo) => {
              const { todoId, todoName } = todo;
              return (
                <li
                  key={todoId}
                  onClick={() => setActiveTodo(todoName)}
                  className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
                >
                  {todoName}
                </li>
              );
            })}
          </ul>
        )}
      </button>
    </div>
  );
};

export default SubtasksCurrStatus;
