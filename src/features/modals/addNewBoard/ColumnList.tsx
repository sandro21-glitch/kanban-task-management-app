import { useAppSelector } from "../../../hooks/reduxHooks";
import crossIcon from "/assets/icon-cross.svg";
type ColumnListTypes = {
  boardCols: string[];
  setBoardCols: (cols: string[]) => void;
};
const ColumnList = ({ boardCols, setBoardCols }: ColumnListTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);

  const handleColumnChange = (index: number, value: string) => {
    const newBoardCols = [...boardCols];
    newBoardCols[index] = value;
    setBoardCols(newBoardCols);
  };



  return (
    <div className="mb-5">
      <label className="text-lightGray font-semibold text-[.8rem] mb-1">
        Board Columns
      </label>
      <ul className="flex flex-col gap-3">
        {boardCols.map((col, index) => {
          return (
            <li key={index} className="flex items-center">
              <input
                type="text"
                placeholder="e.g Todo"
                value={col}
                onChange={(e) => handleColumnChange(index, e.target.value)}
                className={`w-full outline-none border border-borderColor p-2 text-[.9rem] rounded-md ${
                  darkMode ? "bg-darkMode text-white" : "bg-white text-black"
                }`}
              />
              <button type="button" className="ml-5">
                <img src={crossIcon} alt="remove icon" />
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
};

export default ColumnList;
