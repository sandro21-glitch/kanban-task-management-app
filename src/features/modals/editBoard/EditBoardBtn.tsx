import React from "react";

type EditBoardBtnProps = {
  handleEditBoard: () => void;
};

const EditBoardBtn: React.FC<EditBoardBtnProps> = ({ handleEditBoard }) => {
  return (
    <button
      type="button"
      onClick={handleEditBoard}
      className="bg-mediumPurple w-full rounded-full py-2 text-white font-bold hover:opacity-75 transition-all ease-in duration-150"
    >
      Save Changes
    </button>
  );
};

export default EditBoardBtn;
