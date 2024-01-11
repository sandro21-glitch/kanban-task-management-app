import TasksHeader from "./TasksHeader";
import logo from "/assets/logo.svg";
type NavbarTypes = {
  setAddNewTask: (bool: boolean) => void;
};
const Navbar = ({ setAddNewTask }: NavbarTypes) => {
  return (
    <header className="fixed left-0 top-0 right-0 bg-white z-10">
      <nav className="flex items-center p-5">
        <div className="flex items-center gap-4 w-[245px]">
          <img src={logo} alt="logo" />
          <h2 className="font-bold">kanban</h2>
        </div>
        <TasksHeader setAddNewTask={setAddNewTask} />
      </nav>
    </header>
  );
};

export default Navbar;
