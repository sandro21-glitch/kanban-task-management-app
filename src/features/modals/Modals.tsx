import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import AddNewBoard from "./addNewBoard/AddNewBoard";
import {
  openEditBoardPopModal,
  setAddBoardModal,
  setEditBoardModal,
  setNewTaskModal,
  setOpenClearPopup,
  setOpenTaskOptions,
} from "./modalsSlice";
import useOutsideClick from "../../hooks/useClickOutside";
import EditBoard from "./editBoard/EditBoard";
import ClearBoard from "./clearBoard/ClearBoard";
import AddNewTask from "./addTask/AddNewTask";
import TaskOptions from "./taskSubtasks/TaskOptions";

const Modals = () => {
  const {
    addBoardModal,
    editBoardModal,
    openClearPopup,
    newTaskModal,
    openTaskOptions,
  } = useAppSelector((store) => store.modals);

  const isAnyModalOpen =
    addBoardModal ||
    editBoardModal ||
    openClearPopup ||
    newTaskModal ||
    openTaskOptions;

  const modalRef = useRef(null);

  const dispatch = useAppDispatch();

  // callback to close the modal
  const closeModal = () => {
    dispatch(setAddBoardModal(false));
    dispatch(setEditBoardModal(false));
    dispatch(openEditBoardPopModal(false));
    dispatch(setOpenClearPopup(false));
    dispatch(setNewTaskModal(false));
    dispatch(setOpenTaskOptions(false));
  };

  // Attach the useOutsideClick hook to the modal container
  useOutsideClick(modalRef, () => {
    closeModal();
  });
  if (!isAnyModalOpen) {
    return null;
  }
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
        {newTaskModal && <AddNewTask />}
        {openTaskOptions && <TaskOptions />}
      </section>
    </div>
  );
};

export default Modals;
