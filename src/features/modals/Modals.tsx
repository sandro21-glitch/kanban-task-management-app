import { useRef } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/reduxHooks";
import AddNewBoard from "./addNewBoard/AddNewBoard";
import { setAddBoardModal, setEditBoardModal } from "./modalsSlice";
import useOutsideClick from "../../hooks/useClickOutside";
import EditBoard from "./editBoard/EditBoard";

const Modals = () => {
  const { addBoardModal, editBoardModal } = useAppSelector(
    (store) => store.modals
  );
  const isAnyModalOpen = addBoardModal || editBoardModal;
  const modalRef = useRef(null);

  // Access dispatch from the useDispatch hook
  const dispatch = useAppDispatch();

  // Callback to close the modal
  const closeModal = () => {
    dispatch(setAddBoardModal());
    dispatch(setEditBoardModal());
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
      <section ref={modalRef} className="flex justify-center items-center">
        {addBoardModal && <AddNewBoard />}
        {editBoardModal && <EditBoard />}
      </section>
    </div>
  );
};

export default Modals;
