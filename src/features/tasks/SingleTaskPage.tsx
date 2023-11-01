import { useTasksContext } from "../../context/TasksContext";
import AddNewColumn from "./AddNewColumn";
type SingleTaskTypes = {
  setAddNewColumnForm: (active: boolean) => void;
};
const SingleTaskPage = ({ setAddNewColumnForm }: SingleTaskTypes) => {
  const { state } = useTasksContext();
  const { board, activeBoard } = state;

  if (activeBoard == null) return;
  return (
    <div className="flex h-full">
      <ul className="flex gap-5">
        {board[activeBoard].todos.map((todo, index) => {
          // console.log(todo);
          return (
            <li className="flex flex-col" key={index}>
              {/* todo status */}
              <div className="min-w-[280px] font-bold text-[#828fa3] text-[.8rem] tracking-widest">
                {todo.status}
                <span>({todo.statusTodos.length})</span>
              </div>
              {/* todo lsit */}
              <div className="flex flex-col gap-5 mt-5">
                {todo.statusTodos.map((statusTodo, subtaskIndex) => (
                  <div
                    key={subtaskIndex}
                    className="bg-white w-full px-3 py-5 rounded-lg shadow-md"
                  >
                    <h6 className="font-bold text-[.9rem]">
                      {statusTodo.todoName}
                    </h6>
                    <div className="flex items-center gap-1 text-[#828fa3] font-bold text-[.75rem]">
                      {statusTodo.subtasks
                        .filter((subTask) => subTask.completed)
                        .length.toString()}{" "}
                      <span>of</span>
                      {statusTodo.subtasks
                        .filter((subTask) => subTask)
                        .length.toString()}
                      <span>subtasks</span>
                    </div>
                  </div>
                ))}
              </div>
            </li>
          );
        })}
      </ul>
      <AddNewColumn setAddNewColumnForm={setAddNewColumnForm} />
    </div>
  );
};

export default SingleTaskPage;
