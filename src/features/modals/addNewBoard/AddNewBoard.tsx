import { useAppSelector } from "../../../hooks/reduxHooks";
import AddNewColBtn from "./AddNewColBtn";
import ColumnList from "./ColumnList";
import CreateNewBoardBtn from "./CreateNewBoardBtn";

const AddNewBoard = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  return (
    <form>
      <div
        className={`min-w-[90vw] sm:min-w-[570px] ${
          darkMode ? "bg-darkMode" : "bg-white"
        } p-7 rounded-lg`}
      >
        <h3
          className={`${
            darkMode ? "text-white" : "text-black"
          } font-semibold mb-5 text-[1.3rem]`}
        >
          Add new board
        </h3>
        <div className="flex flex-col mb-5">
          <label
            htmlFor=""
            className={`${
              darkMode ? "text-white" : "text-lightGray"
            } font-semibold text-[.8rem] mb-1`}
          >
            Board Name
          </label>
          <input
            type="text"
            placeholder="e.g Web Development"
            className={`outline-none border border-borderColor p-2 text-[.9rem] rounded-md ${
              darkMode ? "bg-darkMode text-white" : "bg-white text-black"
            }`}
          />
        </div>
        {/* board cols */}
        <ColumnList />
        <AddNewColBtn />
        <CreateNewBoardBtn />
      </div>
    </form>
  );
};

export default AddNewBoard;
