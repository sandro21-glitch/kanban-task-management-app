import { useState } from "react";
import ModalLabel from "../../../ui/ModalLabel";
import { useAppSelector } from "../../../hooks/reduxHooks";
import crossIcon from "/assets/icon-cross.svg";
const Subtasks = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const [subtasks, setSubtasks] = useState<string[]>([]);

  const handleAddSubtask = () => {
    setSubtasks([...subtasks, ""]);
  };

  const handleRemoveSubtask = (index: number) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks.splice(index, 1);
    setSubtasks(updatedSubtasks);
  };

  const handleSubtaskChange = (index: number, value: string) => {
    const updatedSubtasks = [...subtasks];
    updatedSubtasks[index] = value;
    setSubtasks(updatedSubtasks);
  };

  return (
    <div className="flex flex-col gap-1 mb-5">
      <ModalLabel forId="subtasks" name="Subtasks" />
      <ul className="flex flex-col gap-3 mb-3">
        {subtasks.map((subtask, index) => (
          <li key={index} className="flex items-center">
            <input
              type="text"
              placeholder="e.g Make Coffee"
              value={subtask}
              onChange={(e) => handleSubtaskChange(index, e.target.value)}
              className={`w-full outline-none border border-borderColor p-2 text-[.9rem] rounded-md ${
                darkMode ? "bg-darkMode text-white" : "bg-white text-black"
              }`}
            />
            <button
              onClick={() => handleRemoveSubtask(index)}
              type="button"
              className="ml-5"
            >
              <img src={crossIcon} alt="remove icon" />
            </button>
          </li>
        ))}
      </ul>

      <button
        onClick={handleAddSubtask}
        type="button"
        className="w-full bg-lightPurple py-2 text-mediumPurple font-bold
         rounded-full hover:bg-transparent transition-all ease-in duration-150"
      >
        + Add New Subtask
      </button>
    </div>
  );
};

export default Subtasks;
