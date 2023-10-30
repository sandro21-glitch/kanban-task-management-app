import boardIcon from "/assets/board-icon.svg";
type BoardBtnType = {
  setOpenBoardForm: (open: boolean) => void;
};
const CreateBoardBtn = ({ setOpenBoardForm }: BoardBtnType) => {
  return (
    <button
      type="button"
      onClick={() => setOpenBoardForm(true)}
      className="py-3 px-6 w-[90%] flex items-center gap-3 font-bold text-lightGray hover:text-mediumPurple hover:bg-hoverGray rounded-r-3xl transition-all ease-in duration-150"
    >
      <img src={boardIcon} alt="boardIcon" />
      +Create New Board
    </button>
  );
};
export default CreateBoardBtn;
