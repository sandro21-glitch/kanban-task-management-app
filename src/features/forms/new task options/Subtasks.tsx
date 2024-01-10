import { useState } from "react";
import iconCross from "/assets/icon-cross.svg";
const Subtasks = () => {
  const [subtasks, setSubtasks] = useState<string[]>(["Make Coffee"]);

  const handleRemoveSubtask = (task: string): void => {
    const newSubtasks = subtasks.filter(
      (subtask) => subtask.toLocaleLowerCase() !== task.toLocaleLowerCase()
    );
    setSubtasks(newSubtasks);
  };

  const handleAddNewTask = (): void => {
    setSubtasks((prevTasks) => [...prevTasks, ""]);
  };
  const handleSubtaskChange = (index: number, value: string): void => {
    setSubtasks((prevValues) => {
      const newValues = [...prevValues];
      newValues[index] = value;
      return newValues;
    });
  };
  return (
    <div className="w-full">
      <div className="w-full flex flex-col gap-1 mb-3">
        <label
          htmlFor="subtask"
          className="text-lightGray font-bold text-[.8rem]"
        >
          Subtasks
        </label>
        <ul className="flex flex-col gap-2">
          {subtasks.map((subtask, index) => {
            return (
              <li
                key={index}
                className="w-full flex items-center justify-center"
              >
                <input
                  id="subtask"
                  type="text"
                  value={subtasks[index]}
                  onChange={(e) => handleSubtaskChange(index, e.target.value)}
                  className="w-full outline-none border text-[.8rem] border-hoverGray p-2 rounded-md"
                  placeholder="e.g. Make Coffee"
                />
                <button
                  type="button"
                  className="ml-5"
                  onClick={() => handleRemoveSubtask(subtask)}
                >
                  <img src={iconCross} alt="cross icon" />
                </button>
              </li>
            );
          })}
        </ul>
      </div>
      <button
        type="button"
        className="mb-7 bg-hoverGray
        capitalize font-bold flex items-center justify-center
        gap-3 py-2 px-6 cursor-pointer hover:bg-transparent
        text-mediumPurple rounded-2xl w-full transition-all ease-in duration-200"
        onClick={handleAddNewTask}
      >
        +Add New Task
      </button>
    </div>
  );
};

export default Subtasks;
