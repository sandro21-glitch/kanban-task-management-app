import { useState } from "react";
import { useAppDispatch } from "../../../hooks/reduxHooks";
import { checkCompletedSubtask } from "../../board/boardsSlice";

type SubtaskTypes = {
  completed: boolean;
  subtaskName: string;
  index: number;
  todoId: string;
};

const SingleSubtask = ({
  completed,
  subtaskName,
  index,
  todoId,
}: SubtaskTypes) => {
  const [isCompleted, setIsCompleted] = useState(completed);
  const dispatch = useAppDispatch();
  const handleChangeCheckbox = () => {
    dispatch(checkCompletedSubtask({ checked: isCompleted, index, todoId }));
  };
  return (
    <label
      htmlFor={subtaskName}
      onClick={handleChangeCheckbox}
      className={`flex items-center gap-2 ${
        completed ? "bg-[#f4f7fd]" : "bg-lightPurple"
      } p-3 rounded-lg cursor-pointer`}
    >
      <input
        id={subtaskName}
        type="checkbox"
        checked={isCompleted}
        onChange={(e) => setIsCompleted(e.target.checked)}
      />
      <div
        className={`${
          completed ? "line-through" : "text-black"
        } text-[.75rem] font-semibold`}
      >
        {subtaskName}
      </div>
    </label>
  );
};

export default SingleSubtask;
