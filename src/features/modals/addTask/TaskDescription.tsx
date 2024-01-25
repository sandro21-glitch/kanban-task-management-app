import { useAppSelector } from "../../../hooks/reduxHooks";
import ModalLabel from "../../../ui/ModalLabel";
type TaskDescTypes = {
  taskDescription: string;
  setTaskDescription: (desc: string) => void;
};
const TaskDescription = ({
  taskDescription,
  setTaskDescription,
}: TaskDescTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  return (
    <div className="flex flex-col gap-1">
      <ModalLabel forId="desc" name="Description (optional)" />
      <textarea
        id="desc"
        value={taskDescription}
        onChange={(e) => setTaskDescription(e.target.value)}
        placeholder="e.g. Start learning Things"
        className={`outline-none border border-borderColor p-2 text-[.9rem] rounded-md ${
          darkMode ? "bg-darkMode text-white" : "bg-white text-black"
        }`}
      ></textarea>
    </div>
  );
};

export default TaskDescription;
