import { setSidebar } from "../features/popups/popupSlice";
import { useAppDispatch, useAppSelector } from "../hooks/reduxHooks";
import AddNewTaskBtn from "./AddNewTaskBtn";
import BoardControls from "./BoardControls";
import logo from "/assets/logo.svg";

const Navbar = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const dispatch = useAppDispatch();
  const { isSidebarOpen } = useAppSelector((store) => store.popup);
  const boards = useAppSelector((store) => store.board.boards);
  const activeBoardName = boards
    .filter((board) => board.isActive)
    .map((board) => board.name);
  return (
    <nav
      className={`h-[4rem] sm:h-[6.0625rem] w-full flex items-center justify-between
       ${
         darkMode ? "bg-darkMode" : "bg-white"
       } transition-all ease-in duration-150 relative z-[99999]`}
    >
      <div
        className={`flex items-center 
         gap-4 sm:min-w-[300px] border border-transparent 
        ${
          darkMode
            ? "sm:border-r-[#FFFFFF21]  border-b-[#FFFFFF21]"
            : "sm:border-r-[#E4EBFA] border-b-[#E4EBFA]"
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
              className={`text-[1.2rem] sm:text-[1.3rem] lg:text-[1.5rem] font-bold ${
                darkMode ? "text-white" : "text-black"
              } flex items-center gap-2`}
            >
              {activeBoardName}
              <span
                className={`sm:hidden cursor-pointer ${
                  isSidebarOpen ? "rotate-180" : "rotate-0"
                }`}
                onClick={() => dispatch(setSidebar(!isSidebarOpen))}
              >
                <svg width="10" height="7" xmlns="http://www.w3.org/2000/svg">
                  <path
                    stroke="#635FC7"
                    strokeWidth="2"
                    fill="none"
                    d="m1 1 4 4 4-4"
                  ></path>
                </svg>
              </span>
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
