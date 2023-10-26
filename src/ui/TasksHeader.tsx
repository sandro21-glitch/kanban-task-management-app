import iconVertical from "/assets/icon-vertical-ellipsis.svg";
const TasksHeader = () => {
  return (
    <header className="p-7 bg-white flex items-center justify-between">
      <h3 className="font-bold">Platform Launch</h3>
      <div className="flex items-center gap-5">
        <button
          className="capitalize bg-mediumPurple text-white p-[10px]
         rounded-3xl font-bold hover:opacity-75 transition-opacity ease-in duration-150"
        >
          + Add new task
        </button>
        <button>
          <img
            src={iconVertical}
            alt="icon vertical"
            className="w-[5px] h-[20px]"
          />
        </button>
      </div>
    </header>
  );
};
export default TasksHeader;
