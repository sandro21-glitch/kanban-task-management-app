type CreateTaskBtnTypes = {
  handleAddSubtask: () => void;
};
const CreateTaskBtn = ({ handleAddSubtask }: CreateTaskBtnTypes) => {
  return (
    <button
      onClick={() => handleAddSubtask()}
      className="
      bg-mediumPurple w-full py-2
        rounded-full font-bold text-white hover:bg-[#a8a4ff]
        transition-colors ease-in duration-150"
    >
      Create Task
    </button>
  );
};

export default CreateTaskBtn;
