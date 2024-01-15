import SidebarTop from "./SidebarTop";

import { useAppSelector } from "../../hooks/reduxHooks";
import OpenSidebar from "./OpenSidebar";
import SidebarBot from "./SidebarBot";
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
      <SidebarBot />
    </aside>
  );
};

export default Sidebar;
