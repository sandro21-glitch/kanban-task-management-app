import { useState } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import EditTitle from "./EditTitle";
import EditDescription from "./EditDescription";
import EditSubtasks from "./EditSubtasks";
import { editSubtaskDetails } from "../../board/boardsSlice";
import { SingleTaskTypes, SubtaskType } from "../../../types/BoardTypes";
import { openEditTaskModal } from "../modalsSlice";
import SaveBtn from "./SaveBtn";
type EditTaskTypes = {
  taskId: string;
  todoId: string;
};

const EditTask = ({ taskId, todoId }: EditTaskTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const { boards } = useAppSelector((store) => store.board);
  const dispatch = useAppDispatch();

  const activeTodo = boards
    .flatMap((board) => board.boardTodos)
    .find((todo) => todo.todoId === todoId);

  const activeTask = activeTodo?.todoTasks.find(
    (task) => task.taskId === taskId
  );
  const [editedTitle, setEditedTitle] = useState<string>(
    activeTask ? activeTask.taskName : ""
  );
  const [editedDesc, setEditedDesc] = useState<string>(
    activeTask ? activeTask.taskDesc : ""
  );
  const [editedSubtasks, setEditedSubtasks] = useState<SubtaskType[]>(
    (activeTask?.subtasks || []).map((subtask) => ({
      subtaskName: subtask.subtaskName,
      subtaskId: subtask.subtaskId,
      isCompleted: subtask.isCompleted,
    }))
  );

  const updatedTask: SingleTaskTypes = {
    taskName: editedTitle,
    taskDesc: editedDesc,
    taskId,
    todoId,
    subtasks: editedSubtasks,
  };
  const handleEditTask = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    dispatch(editSubtaskDetails(updatedTask));
    dispatch(openEditTaskModal({ isOpen: false, taskId: "", todoId: "" }));
  };

  return (
    <form onSubmit={handleEditTask}>
      <div
        className={`min-w-[90vw] sm:min-w-[700px] ${
          darkMode ? "bg-darkMode" : "bg-white"
        } p-7 rounded-lg `}
      >
        <h3
          className={`${
            darkMode ? "text-white" : "text-black"
          } font-semibold mb-5 text-[1.3rem]`}
        >
          Edit Task
        </h3>
        <article>
          <EditTitle
            editedTitle={editedTitle}
            setEditedTitle={setEditedTitle}
          />
          <EditDescription
            editedDesc={editedDesc}
            setEditedDesc={setEditedDesc}
          />
          <EditSubtasks
            editedSubtasks={editedSubtasks}
            setEditedSubtasks={setEditedSubtasks}
          />
        </article>
        <SaveBtn />
      </div>
    </form>
  );
};

export default EditTask;
