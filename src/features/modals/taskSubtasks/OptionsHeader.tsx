import { useAppSelector } from "../../../hooks/reduxHooks";
import vertIcon from "/assets/icon-vertical-ellipsis.svg";

type HeaderTypes = {
  taskName: string;
  setIsSettingsOpen: React.Dispatch<React.SetStateAction<boolean>>;
};
const OptionsHeader = ({ taskName, setIsSettingsOpen }: HeaderTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  return (
    <div className="flex justify-between items-center mb-5 cursor-text">
      <h5 className={`font-bold ${darkMode ? "text-white" : "text-black"}`}>
        {taskName}
      </h5>
      <button type="button" onClick={() => setIsSettingsOpen((prev) => !prev)}>
        <img src={vertIcon} alt="vertical icon" />
      </button>
    </div>
  );
};

export default OptionsHeader;
