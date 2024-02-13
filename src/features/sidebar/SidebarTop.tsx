import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import CreateNewBoardBtn from "../../ui/CreateNewBoardBtn";
import { setActiveBoard } from "../board/boardsSlice";
import boardIcon from "/assets/board-icon.svg";
const SidebarTop = () => {
  const dispatch = useAppDispatch();
  const boards = useAppSelector((store) => store.board.boards);
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  return (
    <div>
      <h2 className="uppercase text-[.8rem] text-lightGray font-bold tracking-widest mb-5 ml-5">
        all boards ({boards.length})
      </h2>
      <ul className="w-[90%]">
        {boards.map((board) => {
          const { name, isActive, id } = board;
          return (
            <li
              onClick={() => dispatch(setActiveBoard(id))}
              key={id}
              className={`py-[1rem] ${
                isActive
                  ? "bg-mediumPurple text-white"
                  : darkMode
                  ? "hover:bg-white"
                  : "hover:bg-sidebarHover"
              } overflow-hidden rounded-r-full flex items-center gap-5 cursor-pointer group`}
            >
              <img src={boardIcon} alt="board icon" className="ml-5 " />
              <h3
                className={`text-[.9rem] font-bold ${
                  isActive
                    ? "text-white"
                    : "text-lightGray group-hover:text-mediumPurple"
                }  normal-case transition-colors ease-in duration-150`}
              >
                {name}
              </h3>
            </li>
          );
        })}
      </ul>
      <CreateNewBoardBtn />
    </div>
  );
};

export default SidebarTop;
