import SidebarTop from "./SidebarTop";

import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import OpenSidebar from "./OpenSidebar";
import SidebarBot from "./SidebarBot";
import { useEffect, useRef, useState } from "react";
import { setSidebar } from "../popups/popupSlice";
import useOutsideClick from "../../hooks/useClickOutside";
const Sidebar = () => {
  const { isSidebarOpen } = useAppSelector((store) => store.popup);
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const dispatch = useAppDispatch();
  const [prevIsSmallScreen, setPrevIsSmallScreen] = useState(
    window.innerWidth <= 640
  );
  const sidebarRef = useRef(null);
  useEffect(() => {
    const handleResize = () => {
      const newWindowWidth = window.innerWidth;
      const isSmallScreen = newWindowWidth <= 640;

      if (isSmallScreen !== prevIsSmallScreen) {
        setPrevIsSmallScreen(isSmallScreen);

        if (isSmallScreen && isSidebarOpen) {
          dispatch(setSidebar(false));
        } else if (!isSmallScreen && !isSidebarOpen) {
          dispatch(setSidebar(true));
        }
      }
    };

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [isSidebarOpen, prevIsSmallScreen, dispatch]);

  const closeSidebar = () => {
    if (isSidebarOpen) {
      dispatch(setSidebar(false));
    }
  };

  // Close sidebar when clicking outside
  useOutsideClick(sidebarRef, closeSidebar);

  if (!isSidebarOpen) return <OpenSidebar />;
  return (
    <aside className="mt-10">
      <div className="bg-black opacity-50 fixed inset-0 w-full sm:hidden"></div>
      <div
        ref={sidebarRef}
        className={`absolute left-0 right-0 top-20 w-[364px] sm:w-[264px] rounded-lg sm:rounded-none sm:static mx-auto sm:min-w-sidebarWidth ${
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
