import SidebarTop from "./SidebarTop";
import lightMode from "/assets/light-mode.svg";
import darkMode from "/assets/dark-mode.svg";
import hideSidebar from "/assets/hide-sidebar.svg";
const Sidebar = () => {
  return (
    <aside className="min-w-sidebarWidth min-h-[90vh] py-5 flex flex-col justify-between border-r">
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
        <button
          className="hover:bg-hoverGray w-[90%] pl-5 flex
         items-center justify-start gap-5 py-[1rem] font-bold text-lightGray hover:text-mediumPurple rounded-r-full transition-all ease-in duration-150 cursor-pointer"
        >
          <img src={hideSidebar} alt="hide sidebar" />
          Hide Sidebar
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
