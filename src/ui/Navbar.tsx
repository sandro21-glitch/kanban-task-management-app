import { useAppSelector } from "../hooks/reduxHooks";
import AddNewTaskBtn from "./AddNewTaskBtn";
import BoardControls from "./BoardControls";
import logo from "/assets/logo.svg";

const Navbar = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const { isSidebarOpen } = useAppSelector((store) => store.popup);
  const boards = useAppSelector((store) => store.board.boards);
  const activeBoardName = boards
    .filter((board) => board.isActive)
    .map((board) => board.name);
  return (
    <nav
      className={`h-[64px] sm:h-[97px] w-full flex items-center justify-between
       ${
         darkMode ? "bg-darkMode" : "bg-white"
       } transition-all ease-in duration-150 `}
    >
      <div
        className={`flex items-center border border-transparent gap-4 sm:min-w-[300px] 
        ${
          isSidebarOpen && darkMode
            ? " border-r-[#3e3f4e]"
            : isSidebarOpen && !darkMode
            ? "border-r-[#e4ebfa]"
            : !isSidebarOpen && !darkMode
            ? "border-r-[#e4ebfa] border-b-[#e4ebfa]"
            : !isSidebarOpen && darkMode
            ? "border-b-[#3e3f4e] border-r-[#3e3f4e]"
            : ""
        }
         h-full`}
      >
        <img src={logo} alt="logo" className="ml-5 " />
        <h1
          className={`font-bold text-[2rem] hidden sm:inline ${
            darkMode ? "text-white" : "text-black"
          }`}
        >
          Kanban
        </h1>
      </div>
      <div
        className={`w-full h-full border-b ${
          darkMode ? "border-b-mediumDark" : null
        } flex items-center`}
      >
        {boards.length < 1 ? null : (
          <ul className="flex items-center justify-between w-full mx-5 ">
            <li
              className={`text-[1.2rem] sm:text-[1.5rem] font-bold ${
                darkMode ? "text-white" : "text-black"
              }`}
            >
              {activeBoardName}
            </li>
            <li className="flex items-center gap-5">
              <AddNewTaskBtn />
              <BoardControls />
            </li>
          </ul>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
