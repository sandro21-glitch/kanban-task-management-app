import SidebarControl from "./SidebarControl";
import SidebarList from "./SidebarList";
import logo from "/assets/logo.svg";
const Sidebar = () => {
  return (
    <aside className="min-w-[261px] fixed left-0 top-0 bottom-0 bg-white">
      <div className="flex justify-between flex-col h-full">
        <div>
          <div className="flex items-center gap-5 mb-5 p-7">
            <img src={logo} alt="logo" />
            <h2 className="font-bold">kanban</h2>
          </div>
          <SidebarList />
        </div>
        <SidebarControl />
      </div>
    </aside>
  );
};
export default Sidebar;
