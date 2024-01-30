import { useEffect, useState } from "react";
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
  const [isCompleted, setIsCompleted] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  useEffect(() => {
    setIsCompleted(completed);
  }, [completed]);
  const handleChangeCheckbox = () => {
    const updatedCompletedValue = !isCompleted;
    dispatch(checkCompletedSubtask({ checked: isCompleted, index, todoId }));
    setIsCompleted(updatedCompletedValue);
  };
  return (
    <label
      htmlFor={subtaskName}
      onClick={handleChangeCheckbox}
      className={`flex items-center gap-2 ${
        isCompleted ? "bg-[#f4f7fd]" : "bg-lightPurple"
      } p-3 rounded-lg`}
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
