// import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
import ModalLabel from "../../../ui/ModalLabel";
import { SubtaskType } from "../../../types/BoardTypes";
import iconCross from "/assets/icon-cross.svg";
import InputError from "../../../ui/InputError";

type EditSubtaskTypes = {
  editedSubtasks: SubtaskType[];
  setEditedSubtasks: React.Dispatch<React.SetStateAction<SubtaskType[]>>;
  isSubmited: boolean;
};

const EditSubtasks = ({
  editedSubtasks,
  setEditedSubtasks,
  isSubmited,
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
      isCompleted: false,
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
            <div key={subtaskId} className="w-full flex mb-3 relative">
              <input
                value={subtaskName}
                onChange={(e) => handleSubtaskChange(e, subtask.subtaskId)}
                type="text"
                className={`${
                  isSubmited && !subtask.subtaskName ? "border-red-500" : ""
                } border outline-none py-2 px-2 rounded-md w-full`}
              />
              <button
                className="ml-5"
                type="button"
                onClick={() => handleRemoveTask(subtaskId)}
              >
                <img src={iconCross} alt="icon cross" />
              </button>
              {isSubmited && !subtask.subtaskName && (
                <InputError top=".8" text="Can't be empty" />
              )}
            </div>
          );
        })}
      </div>
      <button
        type="button"
        onClick={() => handleAddNewTask()}
        className="bg-lightPurple text-mediumPurple rounded-full
         py-2 font-bold hover:bg-transparent transition-all ease-in duration-150"
      >
        + Add New Task
      </button>
    </div>
  );
};

export default EditSubtasks;
