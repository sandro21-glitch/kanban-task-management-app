// import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ModalLabel from "../../../ui/ModalLabel";
import { SubtaskType } from "../../../types/BoardTypes";

type EditSubtaskTypes = {
  editedSubtasks: SubtaskType[];
  setEditedSubtasks: React.Dispatch<React.SetStateAction<SubtaskType[]>>;
};

const EditSubtasks = ({
  editedSubtasks,
  setEditedSubtasks,
}: EditSubtaskTypes) => {
  const handleSubtaskChange = (
    e: React.ChangeEvent<HTMLInputElement>,
    subtaskId: string
  ) => {
    const updatedSubtasks = editedSubtasks.map((subtask) =>
      subtask.subtaskId === subtaskId
        ? { ...subtask, subtaskName: e.target.value }
        : subtask
    );
    setEditedSubtasks(updatedSubtasks);
  };

  const handleAddNewTask = () => {
    const newSubtask = {
      subtaskName: "",
      subtaskId: uuidv4(),
      isCompleted: false, // Make sure to include isCompleted
    };
    setEditedSubtasks((prevState) => [...prevState, newSubtask]);
  };

  const handleRemoveTask = (id: string) => {
    const removeTask = editedSubtasks.filter(
      (subtasks) => subtasks.subtaskId !== id
    );
    setEditedSubtasks(removeTask);
  };

  return (
    <div className="flex flex-col mb-5">
      <ModalLabel forId="" name="Subtasks" />
      <div className="w-full flex flex-col mb-3">
        {editedSubtasks.map((subtask) => {
          const { subtaskId, subtaskName } = subtask;
          return (
            <div key={subtaskId} className="w-full flex mb-3">
              <input
                value={subtaskName}
                onChange={(e) => handleSubtaskChange(e, subtask.subtaskId)}
                type="text"
                className="border outline-none py-2 px-2 rounded-md w-full"
              />
              <button
                className="ml-5"
                type="button"
                onClick={() => handleRemoveTask(subtaskId)}
              >
                X
              </button>
            </div>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => handleAddNewTask()}
        className="border"
      >
        Add New Task
      </button>
    </div>
  );
};

export default EditSubtasks;
