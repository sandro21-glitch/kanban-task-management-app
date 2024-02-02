import { BoardTodos } from "../../../types/BoardTypes";

type SingleTodoTypes = {
  todoId: string;
  todoName: string;
  boardTodos: BoardTodos[];
  setActiveTodo: (name: string) => void;
};

const SingleTodoList = ({
  todoId,
  todoName,
  boardTodos,
  setActiveTodo,
}: SingleTodoTypes) => {
  console.log(boardTodos);
  return (
    <li
      key={todoId}
      onClick={() => setActiveTodo(todoName)}
      className="text-gray-700 block px-4 py-2 text-sm cursor-pointer"
    >
      {todoName}
    </li>
  );
};

export default SingleTodoList;
