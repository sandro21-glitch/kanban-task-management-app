import { useEffect, useState } from "react";
import { useTasksContext } from "../../context/TasksContext";
type EditBoardTypes = {
  addNewColumnForm: boolean;
};
const EditBoard = ({ addNewColumnForm }: EditBoardTypes) => {
  const { state } = useTasksContext();
  const { board, activeBoard } = state;
  const [boardNameValue, setBoardNameValue] = useState(
    activeBoard ? board[activeBoard].boardName : ""
  );
  const [todoStatus, setTodoStatus] = useState<string[]>([] as string[]);

  useEffect(() => {
    if (activeBoard === null) return;
    setBoardNameValue(board[activeBoard].boardName);

    // Initialize todoStatus based on the active board's todos
    const initialTodoStatus = board[activeBoard].todos.map(
      (todo) => todo.status
    );

    setTodoStatus(initialTodoStatus);
  }, [board, activeBoard]);
  console.log(todoStatus);

  const addNewColInput = (newTodo: string) => {
    setTodoStatus((prevTodos) => [...prevTodos, newTodo]);
  };

  if (activeBoard === null) return null;

  if (!addNewColumnForm) return null;
  return (
    <div className="absolute z-20 left-0 top-0 bottom-0 right-0 flex justify-center items-center">
      <div className="bg-black opacity-50 fixed z-20 left-0 top-0 bottom-0 right-0"></div>
      <div className="relative z-30 w-full max-w-[480px] p-[25px] h-fit bg-white flex flex-col justify-center items-center mx-auto">
        <h4 className="font-bold text-black">Edit board</h4>
        <form className="w-full">
          {board.map((board, index) => {
            if (index === activeBoard)
              return (
                <div className="flex flex-col" key={index}>
                  <div className="flex flex-col justify-start items-start w-full">
                    <label htmlFor="">{board.boardName}</label>
                    <input
                      type="text"
                      value={boardNameValue}
                      onChange={(e) => setBoardNameValue(e.target.value)}
                    />
                  </div>
                  <div className="flex flex-col">
                    <label htmlFor="">Board Columns</label>
                    {/* {board.todos.map((todo, todoIndex) => {
                      return (
                        <input
                          key={todoIndex}
                          type="text"
                          value={todo.status}
                          onChange={(e) =>
                            setTodoStatus((prevTodos) => [
                              ...prevTodos,
                              e.target.value,
                            ])
                          }
                        />
                      );
                    })} */}
                  </div>
                </div>
              );
          })}
          <div className="flex flex-col items-start w-full bg-green-400">
            <button>Add new Column</button>
            <button>Save Changes</button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditBoard;
