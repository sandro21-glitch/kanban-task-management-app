type NewColBtnTypes = {
  editBoardCols: string[];
  setEditBoardCols: (col: string[]) => void;
};

const AddNewColumnBtn = ({
  editBoardCols,
  setEditBoardCols,
}: NewColBtnTypes) => {
  const handleAddNewCol = () => {
    setEditBoardCols([...editBoardCols, "Todo"]);
  };

  return (
    <button
      onClick={handleAddNewCol}
      type="button"
      className="bg-lightPurple mb-5 w-full rounded-full py-2 text-mediumPurple font-bold hover:bg-transparent transition-all ease-in duration-150"
    >
      + Add new column
    </button>
  );
};

export default AddNewColumnBtn;
