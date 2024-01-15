import { setSidebar } from "../popups/popupSlice";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import hideSidebar from "/assets/hide-sidebar.svg";

const HideSidebarBtn = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  return (
    <button
      onClick={() => dispatch(setSidebar())}
      className={`${
        darkMode ? "hover:bg-white" : "hover:bg-hoverGray"
      } w-[90%] pl-5 flex
      items-center justify-start gap-5 py-[1rem] font-bold
       text-lightGray hover:text-mediumPurple
        rounded-r-full transition-all ease-in duration-150 cursor-pointer`}
    >
      <img src={hideSidebar} alt="hide sidebar" />
      Hide Sidebar
    </button>
  );
};

export default HideSidebarBtn;
