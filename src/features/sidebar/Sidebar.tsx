import SidebarTop from "./SidebarTop";

import { useAppSelector } from "../../hooks/reduxHooks";
import OpenSidebar from "./OpenSidebar";
import SidebarBot from "./SidebarBot";
const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((store) => store.popup);
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  if (!isSidebarOpen) return <OpenSidebar />;
  return (
    <aside
      className={`min-w-sidebarWidth ${
        darkMode ? "bg-darkMode border-r-mediumDark" : "bg-white"
      }
       min-h-[90vh] py-5 flex flex-col justify-between 
      transition-all ease-in duration-150 border-r`}
    >
      {/* top side */}
      <SidebarTop />
      {/* bot side */}
      <SidebarBot />
    </aside>
  );
};

export default Sidebar;
