import { useState } from "react";
import ModalInput from "../../../ui/ModalInput";
import ModalLabel from "../../../ui/ModalLabel";

const TaskName = () => {
  const [taskName, setTaskName] = useState("");
  return (
    <div className="flex flex-col gap-1">
      <ModalLabel forId="taskName" name="Task Name" />
      <ModalInput
        id="taskName"
        value={taskName}
        onChange={setTaskName}
        placeholder="e.g Take coffe break"
      />
    </div>
  );
};

export default TaskName;
