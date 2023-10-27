import ShowSidebar from "/assets/show-sidebar.svg";
type SidebarTypes = {
  setIsSidebarOpen: (open: boolean) => void;
};
const OpenSidebar = ({ setIsSidebarOpen }: SidebarTypes) => {
  return (
    <button
      className="fixed left-0 bottom-10 w-16 h-14 rounded-r-3xl bg-mediumPurple flex justify-center items-center
      hover:opacity-75 transition-all ease-in duration-150"
      onClick={() => setIsSidebarOpen(true)}
    >
      <img src={ShowSidebar} alt="show sidebar" />
    </button>
  );
};

export default OpenSidebar;
