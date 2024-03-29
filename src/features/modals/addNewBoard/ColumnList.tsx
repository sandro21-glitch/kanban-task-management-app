import { useAppSelector } from "../../../hooks/reduxHooks";
import crossIcon from "/assets/icon-cross.svg";
type ColumnListTypes = {
  boardCols: string[];
  setBoardCols: (cols: string[]) => void;
  submitted: boolean;
};
const ColumnList = ({
  boardCols,
  setBoardCols,
  submitted,
}: ColumnListTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);

  const handleColumnChange = (index: number, value: string) => {
    const newBoardCols = [...boardCols];
    newBoardCols[index] = value;
    setBoardCols(newBoardCols);
  };

  const handleRemoveCols = (index: number) => {
    const newCols = boardCols.filter((_, colIndex) => colIndex !== index);
    setBoardCols(newCols);
  };

  return (
    <div className="mb-5">
      <label className="text-lightGray font-semibold text-[.8rem] mb-1">
        Board Columns
      </label>
      <ul className="flex flex-col gap-3">
        {boardCols.map((col, index) => {
          return (
            <li key={index} className="flex items-center relative">
              <input
                type="text"
                placeholder="e.g Todo"
                value={col}
                onChange={(e) => handleColumnChange(index, e.target.value)}
                className={`w-full outline-none border border-borderColor p-2 text-[.9rem] rounded-md ${
                  darkMode ? "bg-darkMode text-white" : "bg-white text-black"
                } ${!col && submitted ? "border-red-500" : ""}`}
              />
              {!col && submitted && (
                <span className="text-red-500 absolute right-12 top-3 text-[.75rem]">
                  Can't be empty
                </span>
              )}
              <button
                onClick={() => handleRemoveCols(index)}
                type="button"
                className="ml-5"
              >
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
