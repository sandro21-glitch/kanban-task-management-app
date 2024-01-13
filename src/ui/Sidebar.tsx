import boardIcon from "/assets/board-icon.svg";
const Sidebar = () => {
  return (
    <aside className="min-w-sidebarWidth py-5">
      {/* top side */}
      <div className="">
        <h2 className="uppercase text-[.8rem] text-lightGray font-bold tracking-widest mb-5 ml-5">
          all boards (2)
        </h2>
        <ul className="w-[90%]">
          <li className="py-[1rem] bg-mediumPurple rounded-r-full flex items-center gap-5 cursor-pointer">
            <img src={boardIcon} alt="board icon" className="ml-5" />
            <h3 className="text-[.9rem] font-bold text-white capitalize">
              Example Board
            </h3>
          </li>
          <li className="py-[1rem] rounded-r-full flex items-center gap-5 hover:bg-hoverGray transition-all ease-in duration-150 cursor-pointer">
            <img src={boardIcon} alt="board icon" className="ml-5 gray-svg" />
            <h3 className="text-[.9rem] font-bold text-lightGray capitalize">
              Example Board
            </h3>
          </li>
        </ul>
        <button className="text-mediumPurple font-bold flex items-center gap-5 mt-5">
          <img src={boardIcon} alt="board icon" className="ml-5 gray-svg" />+
          Create New Board
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
