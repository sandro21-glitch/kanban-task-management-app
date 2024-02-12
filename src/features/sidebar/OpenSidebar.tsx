import { setSidebar } from "../popups/popupSlice";
import { useAppDispatch } from "../../hooks/reduxHooks";
import showSidebar from "/assets/show-sidebar.svg";
const OpenSidebar = () => {
  const dispatch = useAppDispatch();

  return (
    <button
      onClick={() => dispatch(setSidebar(true))}
      className="rounded-r-full absolute left-0 bottom-5 z-[99]  bg-mediumPurple p-[1.3rem]
       hidden sm:flex items-center justify-center"
    >
      <img src={showSidebar} alt="show sidebar" className="w-5 h-auto" />
    </button>
  );
};

export default OpenSidebar;
