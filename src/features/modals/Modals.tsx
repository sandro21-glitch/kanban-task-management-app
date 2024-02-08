import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import AddNewBoard from "./addNewBoard/AddNewBoard";
import {
  openEditBoardPopModal,
  openEditTaskModal,
  setAddBoardModal,
  setEditBoardModal,
  setNewTaskModal,
  setOpenClearPopup,
  setOpenDeletePopup,
  setOpenTaskOptions,
} from "./modalsSlice";
import useOutsideClick from "../../hooks/useClickOutside";
import EditBoard from "./editBoard/EditBoard";
import ClearBoard from "./clearBoard/ClearBoard";
import AddNewTask from "./addTask/AddNewTask";
import TaskOptions from "./taskSubtasks/TaskOptions";
import DeleteBoard from "./deleteBoard/DeleteBoard";
import EditTask from "./editTask/EditTask";

const Modals = () => {
  const {
    addBoardModal,
    editBoardModal,
    openClearPopup,
    newTaskModal,
    openTaskOptions,
    openDeletePopup,
    editTaskModal,
  } = useAppSelector((store) => store.modals);

  const isAnyModalOpen =
    addBoardModal ||
    editBoardModal ||
    openClearPopup ||
    newTaskModal ||
    openDeletePopup ||
    editTaskModal.isOpen ||
    openTaskOptions.isOpen;

  const modalRef = useRef(null);

  const dispatch = useAppDispatch();

  // callback to close the modal
  const closeModal = () => {
    dispatch(setAddBoardModal(false));
    dispatch(setEditBoardModal(false));
    dispatch(openEditBoardPopModal(false));
    dispatch(setOpenClearPopup(false));
    dispatch(setNewTaskModal(false));
    dispatch(setOpenDeletePopup(false));
    dispatch(setOpenTaskOptions({ isOpen: false, task: null }));
    dispatch(openEditTaskModal({ isOpen: false, taskId: "", todoId: "" }));
  };

  // Attach the useOutsideClick hook to the modal container
  useOutsideClick(modalRef, () => {
    closeModal();
  });
  if (!isAnyModalOpen) {
    return null;
  }
  const { task } = openTaskOptions;
  const { taskId, todoId } = editTaskModal;
  return (
    <div className="w-screen h-screen absolute inset-0 z-[99999] flex justify-center">
      <div className=" bg-black opacity-75 absolute inset-0 z-[-1]"></div>
      <section
        ref={modalRef}
        className="flex justify-center items-center h-fit my-auto"
      >
        {addBoardModal && <AddNewBoard />}
        {editBoardModal && <EditBoard />}
        {openClearPopup && <ClearBoard />}
        {openDeletePopup && <DeleteBoard />}
        {newTaskModal && <AddNewTask />}
        {openTaskOptions.isOpen && task && (
          <TaskOptions
            subtasks={task.subtasks}
            taskId={task.taskId}
            taskName={task.taskName}
            todoId={task.todoId}
            taskDesc={task.taskDesc}
          />
        )}
        {editTaskModal.isOpen && <EditTask taskId={taskId} todoId={todoId} />}
      </section>
    </div>
  );
};

export default Modals;
