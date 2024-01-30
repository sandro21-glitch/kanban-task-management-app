import { useAppSelector } from "../../hooks/reduxHooks";
import TodoTasks from "./TodoTasks";
import { selectActiveBoard } from "./boardsSlice";

const BoardColumns = () => {
  const activeBoard = useAppSelector(selectActiveBoard);
  if (!activeBoard) return null;
  const { boardTodos } = activeBoard;
  return (
    <article>
      <ul className="flex gap-7 text-lightGray">
        {boardTodos.map((todo) => {
          const { todoId } = todo;
          return <TodoTasks key={todoId} todo={todo} />;
        })}
      </ul>
    </article>
  );
};

export default BoardColumns;
