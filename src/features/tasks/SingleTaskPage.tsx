import { useTasksContext } from "../../context/TasksContext";

const SingleTaskPage = () => {
  const { state } = useTasksContext();
  const { board, activeBoard } = state;

  if (activeBoard == null) return;
  return (
    <div className="flex h-full">
      <ul className="flex">
        {board[activeBoard].todos.map((todo, index) => {
          return (
            <li
              key={index}
              className="min-w-[280px] font-bold text-[#828fa3] text-[.8rem] tracking-widest"
            >
              {todo.status}
            </li>
          );
        })}
        {/* <li className="min-w-[280px] font-bold text-[#828fa3] text-sm">
          Todo (4)
        </li>
        <li className="min-w-[280px] font-bold text-[#828fa3] text-sm">
          Doing (5)
        </li>
        <li className="min-w-[280px] font-bold text-[#828fa3] text-sm">
          Done (7)
        </li> */}
      </ul>
      <div className="group min-w-[280px] min-h-full flex justify-center items-center mt-10 bg-hoverGray rounded-md cursor-pointer">
        <div className="p-5 font-bold text-[1.5rem] text-[#828fa3] group-hover:text-mediumPurple transition-all ease-in duration-150 ">
          + New Column
        </div>
      </div>
    </div>
  );
};

export default SingleTaskPage;
