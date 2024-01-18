import { useAppSelector } from "../../../hooks/reduxHooks";
import AddNewColBtn from "./AddNewColBtn";
import BoardName from "./BoardName";
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
        <BoardName />
        {/* board cols */}
        <ColumnList />
        <AddNewColBtn />
        <CreateNewBoardBtn />
      </div>
    </form>
  );
};

export default AddNewBoard;
