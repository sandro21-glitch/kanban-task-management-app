import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import { v4 as uuidv4 } from "uuid";
import TaskName from "./TaskName";
import TaskDescription from "./TaskDescription";
import Subtasks from "./Subtasks";
import SelectCol from "./SelectCol";
import CreateTaskBtn from "./CreateTaskBtn";
import { addNewTask } from "../../board/boardsSlice";
import { setNewTaskModal } from "../modalsSlice";
export interface ActiveStatus {
  statusName: string;
  index: number | null;
}
const AddNewTask = () => {
  const dispatch = useAppDispatch();
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const [taskName, setTaskName] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [subtasks, setSubtasks] = useState<string[]>([]);
  const [formSubmitted, setFormSubmitted] = useState(false);
  const [activeStatus, setActiveStatus] = useState<ActiveStatus>({
    statusName: "",
    index: null,
  });

  const todoTask = {
    taskName: taskName,
    taskDesc: taskDescription,
    taskId: uuidv4(),
    subtasks: subtasks.map((subtask) => ({
      subtaskId: uuidv4(),
      subtaskName: subtask,
      isCompleted: false,
    })),
  };

  const handleAddSubtask = () => {
    setFormSubmitted(true);
    if (
      taskName !== "" &&
      subtasks.length >= 1 &&
      activeStatus.index !== null
    ) {
      dispatch(addNewTask({ todoTask, activeStatus }));
      dispatch(setNewTaskModal(false));
    }
  };

  return (
    <article
      className={`min-w-[90vw] sm:min-w-[670px] ${
        darkMode ? "bg-darkMode" : "bg-white"
      } p-7 rounded-lg`}
    >
      <h3
        className={`${
          darkMode ? "text-white" : "text-black"
        } font-semibold mb-5 text-[1.3rem]`}
      >
        Add New Task
      </h3>
      <div className="flex flex-col gap-5">
        <TaskName
          submitted={formSubmitted}
          taskName={taskName}
          setTaskName={setTaskName}
        />
        <TaskDescription
          taskDescription={taskDescription}
          setTaskDescription={setTaskDescription}
        />
        <Subtasks
          subtasks={subtasks}
          setSubtasks={setSubtasks}
          submitted={formSubmitted}
        />
        <SelectCol
          submitted={formSubmitted}
          activeStatus={activeStatus}
          setActiveStatus={setActiveStatus}
        />
        <CreateTaskBtn handleAddSubtask={handleAddSubtask} />
      </div>
    </article>
  );
};

export default AddNewTask;
