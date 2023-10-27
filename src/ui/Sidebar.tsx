import OpenSidebar from "./OpenSidebar";
import SidebarControl from "./SidebarControl";
import SidebarList from "./SidebarList";

type SidebarTypes = {
  isSidebarOpen: boolean;
  setIsSidebarOpen: (open: boolean) => void;
};

const Sidebar = ({ isSidebarOpen, setIsSidebarOpen }: SidebarTypes) => {
  if (!isSidebarOpen)
    return <OpenSidebar setIsSidebarOpen={setIsSidebarOpen} />;
  return (
    <aside className="min-w-[261px] fixed left-0 top-[5rem] bottom-0">
      <div className="flex justify-between flex-col h-full">
        <SidebarList />
        <SidebarControl setIsSidebarOpen={setIsSidebarOpen} />
      </div>
    </aside>
  );
};
export default Sidebar;
