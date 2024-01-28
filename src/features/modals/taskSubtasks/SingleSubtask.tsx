
type SubtaskTypes = {
  completed: boolean;
  subtaskName: string;
};

const SingleSubtask = ({ completed, subtaskName }: SubtaskTypes) => {
  return (
    <li
      className={`flex items-center gap-2 ${
        completed ? "bg-[#f4f7fd]" : "bg-lightPurple"
      } p-3 rounded-lg`}
    >
      <input type="checkbox" checked={completed} />
      <div
        className={`${
          completed ? "line-through" : "text-black"
        } text-[.75rem] font-semibold`}
      >
        {subtaskName}
      </div>
    </li>
  );
};

export default SingleSubtask;
