import { useAppSelector } from "../../hooks/reduxHooks";
import TodoTasks from "./TodoTasks";
import { selectActiveBoard } from "./boardsSlice";

const BoardColumns = () => {
  const activeBoard = useAppSelector(selectActiveBoard);
  if (!activeBoard) return null;

  const { boardTodos } = activeBoard;

  return (
    <ul className="flex gap-7 text-lightGray">
      {boardTodos.map((todo) => (
        <TodoTasks key={todo.todoId} todo={todo} />
      ))}
    </ul>
  );
};

export default BoardColumns;
