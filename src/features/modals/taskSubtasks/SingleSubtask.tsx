import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { checkCompletedSubtask } from "../../board/boardsSlice";

type SubtaskTypes = {
  subtaskName: string;
  subtaskId: string;
  todoId: string;
  isCompleted: boolean;
};

const SingleSubtask = ({
  subtaskName,
  subtaskId,
  todoId,
  isCompleted,
}: SubtaskTypes) => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((store) => store.theme.darkMode);

  const [localIsCompleted, setLocalIsCompleted] = useState(isCompleted);

  const handleChangeCheckbox = () => {
    setLocalIsCompleted(!localIsCompleted);
    dispatch(
      checkCompletedSubtask({ checked: !localIsCompleted, subtaskId, todoId })
    );
  };

  return (
    <label
      htmlFor={subtaskId}
      className={`flex items-center gap-2 ${
        localIsCompleted ? "bg-[#f4f7fd]" : "bg-lightPurple"
      } p-3 rounded-lg`}
    >
      <input
        id={subtaskId}
        type="checkbox"
        checked={localIsCompleted}
        onChange={handleChangeCheckbox}
      />
      <div
        className={`${
          localIsCompleted
            ? darkMode
              ? "line-through text-gray-400"
              : "line-through text-gray-400"
            : !darkMode
            ? "text-black"
            : "text-white"
        } text-[.75rem] font-semibold`}
      >
        {subtaskName}
      </div>
    </label>
  );
};

export default SingleSubtask;
