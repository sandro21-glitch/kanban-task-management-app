type AddNewColTypes = {
  setAddNewColumnForm: (actove: boolean) => void;
};
const AddNewColumn = ({ setAddNewColumnForm }: AddNewColTypes) => {
  return (
    <button type="button"
      onClick={() => setAddNewColumnForm(true)}
      className="ml-5 group min-w-[280px] min-h-full flex justify-center items-center mt-10 bg-[#eaf0fa] rounded-md cursor-pointer"
    >
      <div className="p-5 font-bold text-[1.5rem] text-[#828fa3] group-hover:text-mediumPurple transition-all ease-in duration-150 ">
        + New Column
      </div>
    </button>
  );
};

export default AddNewColumn;
