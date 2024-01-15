import SidebarTop from "./SidebarTop";
import lightMode from "/assets/light-mode.svg";
import darkMode from "/assets/dark-mode.svg";
import HideSidebarBtn from "./HideSidebarBtn";
import { useAppSelector } from "../hooks/reduxHooks";
import OpenSidebar from "./OpenSidebar";
const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((store) => store.popup);
  if (!isSidebarOpen) return <OpenSidebar />;
  return (
    <aside
      className={`min-w-sidebarWidth bg-white min-h-[90vh] py-5 flex flex-col justify-between border-r
      transition-all ease-in duration-200 delay-200`}
    >
      {/* top side */}
      <SidebarTop />
      {/* bot side */}
      <div>
        <div className="flex items-center justify-center gap-5 mb-5 bg-boardColor py-[.9rem] max-w-[90%] rounded-lg">
          <img src={lightMode} alt="light mode" />
          <label className="relative inline-flex items-center cursor-pointer">
            <input type="checkbox" value="" className="sr-only peer" />
            <div className="w-11 h-6 bg-mediumPurple peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mediumPurple"></div>
          </label>
          <img src={darkMode} alt="dark mode" />
        </div>
        <HideSidebarBtn />
      </div>
    </aside>
  );
};

export default Sidebar;