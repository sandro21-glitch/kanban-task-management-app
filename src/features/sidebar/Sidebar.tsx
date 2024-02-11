import SidebarTop from "./SidebarTop";

import { useAppSelector } from "../../hooks/reduxHooks";
import OpenSidebar from "./OpenSidebar";
import SidebarBot from "./SidebarBot";
const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((store) => store.popup);
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  if (!isSidebarOpen) return <OpenSidebar />;
  return (
    <aside >
      <div className="bg-black opacity-50 fixed left-0 top-0 w-full sm:hidden "></div>
      <div
        className={`absolute left-0 right-0 top-5 w-[264px] rounded-lg sm:rounded-none  sm:static mx-auto sm:min-w-sidebarWidth ${
          darkMode ? "bg-darkMode border-r-mediumDark" : "bg-white"
        }
       sm:h-full  py-5 sm:flex flex-col justify-between 
       border-r z-[9999]`}
      >
        {/* top side */}
        <SidebarTop />
        {/* bot side */}
        <SidebarBot />
      </div>
    </aside>
  );
};

export default Sidebar;
