import lightMode from "/assets/light-mode.svg";
import darkModeImage from "/assets/dark-mode.svg";
import HideSidebarBtn from "./HideSidebarBtn";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import { setDarkMode } from "../ThemeSwitcher/themeSlice";

const SidebarBot = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const dispatch = useAppDispatch();
  return (
    <div>
      <div
        className={`flex items-center justify-center
         gap-5 mt-5 sm:mb-5 ${
           darkMode ? "bg-boardColorDark" : "bg-hoverGray"
         } bg-boardColor py-[.9rem] max-w-[90%] mx-auto rounded-lg`}
      >
        <img src={lightMode} alt="light mode" />
        <label className="relative inline-flex items-center cursor-pointer">
          <input
            type="checkbox"
            checked={darkMode}
            onChange={() => dispatch(setDarkMode())}
            className="sr-only peer"
          />
          <div className="w-11 h-6 bg-mediumPurple peer-focus:outline-none peer-focus:ring-4 rounded-full peer dark:bg-gray-700 peer-checked:after:translate-x-full rtl:peer-checked:after:-translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:start-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all peer-checked:bg-mediumPurple"></div>
        </label>
        <img src={darkModeImage} alt="dark mode" />
      </div>
      <HideSidebarBtn />
    </div>
  );
};

export default SidebarBot;
