import { useAppSelector } from "../../hooks/reduxHooks";
import TodoTasks from "./TodoTasks";

const BoardColumns = () => {
  const { boards } = useAppSelector((store) => store.board);
  const activeBoardCols = boards.filter((board) => board.isActive);
  const { boardTodos } = activeBoardCols[0];
  return (
    <article>
      <ul className="flex gap-7 text-lightGray">
        {boardTodos.map((todo, index) => {
          return <TodoTasks key={index} todo={todo} />;
        })}
      </ul>
    </article>
  );
};

export default BoardColumns;
