import { useAppSelector } from "../../../hooks/reduxHooks";
import crossIcon from "/assets/icon-cross.svg";

const ColumnList = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  return (
    <div className="mb-5">
      <label className="text-lightGray font-semibold text-[.8rem] mb-1">
        Board Columns
      </label>
      <ul className="flex flex-col gap-3">
        <li className="flex items-center">
          <input
            type="text"
            placeholder="e.g Todo"
            className={`w-full outline-none border border-borderColor p-2 text-[.9rem] rounded-md ${
              darkMode ? "bg-darkMode text-white" : "bg-white text-black"
            }`}
          />
          <button type="button" className="ml-5">
            <img src={crossIcon} alt="remove icon" />
          </button>
        </li>
        <li className="flex items-center">
          <input
            type="text"
            placeholder="e.g Todo"
            className={`w-full outline-none border border-borderColor p-2 text-[.9rem] rounded-md ${
              darkMode ? "bg-darkMode text-white" : "bg-white text-black"
            }`}
          />
          <button type="button" className="ml-5">
            <img src={crossIcon} alt="remove icon" />
          </button>
        </li>
      </ul>
    </div>
  );
};

export default ColumnList;
