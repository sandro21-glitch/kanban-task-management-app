type TaskDescriptionTypes = {
  setTaskDescription: React.Dispatch<
    React.SetStateAction<{
      name: string;
      description: string;
    }>
  >;
};
const TaskDescription = ({ setTaskDescription }: TaskDescriptionTypes) => {
  return (
    <div className="w-full mb-5">
      <div className="flex flex-col justify-start w-full mb-7 gap-1">
        <label
          htmlFor="title"
          className="text-lightGray font-bold text-[.8rem]"
        >
          Title
        </label>
        <input
          onChange={(e) =>
            setTaskDescription((prev) => ({
              ...prev,
              name: e.target.value,
            }))
          }
          type="text"
          id="title"
          placeholder="e.g. Start learning Things"
          className="outline-none border text-[.8rem] border-hoverGray p-2"
        />
      </div>
      <div className="flex flex-col w-full gap-1">
        <label
          htmlFor="description"
          className="text-lightGray font-bold text-[.8rem]"
        >
          Description (optional)
        </label>
        <textarea
          onChange={(e) =>
            setTaskDescription((prev) => ({
              ...prev,
              description: e.target.value,
            }))
          }
          id="description"
          placeholder="e.g. Start learning Things"
          className="w-full h-[3rem] outline-none border text-[.8rem] border-hoverGray p-2"
        ></textarea>
      </div>
    </div>
  );
};

export default TaskDescription;
