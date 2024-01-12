import { useState } from "react";
import { BoardTypes } from "../../../types/StateTypes";

interface SelectTaskTypes {
  selectedBoard: BoardTypes | null;
  setColName: (colName: string) => void;
}
const SelectTaskStatus = ({ selectedBoard, setColName }: SelectTaskTypes) => {
  const [openDropdown, setOpenDropdown] = useState(false);

  const handleSelectStatus = (colName: string): void => {
    setColName(colName);
    setOpenDropdown(false);
  };

  return (
    <div className="w-full mb-5">
      <h2 className="text-[1rem] text-black mb-2">Status</h2>
      {/* dropdown */}
      <div className="relative w-full">
        <button
          onClick={() => setOpenDropdown(!openDropdown)}
          id="dropdownDefaultButton"
          data-dropdown-toggle="dropdown"
          className="relative w-full text-black border rounded-md text-sm px-3 py-2.5 text-center inline-flex items-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
          type="button"
        >
          Select Column
        </button>

        <div
          id="dropdown"
          className={`z-10 absolute top-[3rem] ${
            openDropdown ? "block" : "hidden"
          } border-2 px-3 w-full left-0 right-0 bg-white divide-y divide-gray-100 rounded-lg shadow  dark:bg-gray-700`}
        >
          <ul
            className="py-2 text-[1rem] text-lightGray font-medium"
            aria-labelledby="dropdownDefaultButton"
          >
            {selectedBoard?.todos.map((todoList) => {
              return (
                <li onClick={() => handleSelectStatus(todoList.status)}>
                  {todoList.status}
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default SelectTaskStatus;
