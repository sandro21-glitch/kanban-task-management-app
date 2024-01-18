import AddNewColBtn from "./AddNewColBtn";
import ColumnList from "./ColumnList";
import CreateNewBoardBtn from "./CreateNewBoardBtn";

const AddNewBoard = () => {
  return (
    <form>
      <div className="min-w-[90vw] sm:min-w-[570px] bg-white p-7 rounded-lg">
        <h3 className="font-semibold mb-5 text-[1.3rem]">Add new board</h3>
        <div className="flex flex-col mb-5">
          <label
            htmlFor=""
            className="text-lightGray font-semibold text-[.8rem] mb-1"
          >
            Board Name
          </label>
          <input
            type="text"
            placeholder="e.g Web Development"
            className="outline-none border p-2 text-[.9rem]"
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
