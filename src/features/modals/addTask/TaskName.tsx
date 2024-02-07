import ModalInput from "../../../ui/ModalInput";
import ModalLabel from "../../../ui/ModalLabel";
type TaskNameTypes = {
  taskName: string;
  setTaskName: (name: string) => void;
  submitted: boolean;
};
const TaskName = ({ taskName, setTaskName, submitted }: TaskNameTypes) => {
  return (
    <div className="flex flex-col gap-1">
      <ModalLabel forId="taskName" name="Task Name" />
      <ModalInput
        id="taskName"
        value={taskName}
        onChange={setTaskName}
        isSubmited={submitted}
        placeholder="e.g Take coffe break"
      />
    </div>
  );
};

export default TaskName;
