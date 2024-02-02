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
  const handleChangeCheckbox = () => {
    dispatch(
      checkCompletedSubtask({ checked: !isCompleted, subtaskId, todoId })
    );
  };

  return (
    <label
      htmlFor={subtaskId}
      className={`flex items-center gap-2 ${
        isCompleted ? "bg-[#f4f7fd]" : "bg-lightPurple"
      } p-3 rounded-lg`}
    >
      <input
        id={subtaskId}
        type="checkbox"
        checked={isCompleted}
        onChange={handleChangeCheckbox}
      />
      <div
        className={`${
          isCompleted
            ? darkMode
              ? "line-through text-gray-400"
              : "line-through text-gray-400"
            : !darkMode
            ? "text-black"
            : ""
        } text-[.75rem] font-semibold`}
      >
        {subtaskName}
      </div>
    </label>
  );
};

export default SingleSubtask;
