import AddNewTaskBtn from "./AddNewTaskBtn";
import BoardControls from "./BoardControls";
import logo from "/assets/logo.svg";

const Navbar = () => {
  return (
    <nav className="h-[97px] w-full flex items-center justify-between">
      <div className="flex items-center gap-4 min-w-[300px] border-r h-full">
        <img src={logo} alt="" className="ml-5" />
        <h1 className="font-bold text-[2rem]">Kanban</h1>
      </div>
      <div className="w-full h-full border-b flex items-center">
        <ul className="flex items-center justify-between w-full mx-5 ">
          <li className="text-[1.5rem] font-bold">Example Board</li>
          <li className="flex items-center gap-5">
            <AddNewTaskBtn />
            <BoardControls />
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
