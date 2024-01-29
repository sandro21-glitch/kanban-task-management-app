import { useRef, useEffect, useCallback } from "react";
import { useAppDispatch, useAppSelector } from "../../../hooks/reduxHooks";
import OptionsHeader from "./OptionsHeader";
import SubtasksList from "./SubtasksList";
import { setOpenTaskOptions } from "../modalsSlice";

type TaskOptionTypes = {
  taskName: string;
  taskDesc?: string;
  subtasks: { subtaskName: string; isCompleted: boolean }[];
};

const TaskOptions = ({ taskName, taskDesc, subtasks }: TaskOptionTypes) => {
  const dispatch = useAppDispatch();
  const { openTaskOptions } = useAppSelector((store) => store.modals);
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const completedSubs = subtasks.filter((task) => task.isCompleted).length;
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    dispatch(setOpenTaskOptions(false));
  };

  const handleOutsideClick = useCallback(
    (event: MouseEvent) => {
      if (
        modalRef.current &&
        !modalRef.current.contains(event.target as Node)
      ) {
        closeModal();
      }
    },
    [closeModal]
  );

  const handleInsideClick = useCallback(
    (event: React.MouseEvent<HTMLDivElement>) => {
      // Prevent clicks inside the modal from closing it
      event.stopPropagation();
    },
    []
  );

  useEffect(() => {
    if (openTaskOptions) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [openTaskOptions, handleOutsideClick]);

  if (!openTaskOptions) return null;

  return (
    <div className="w-screen h-screen fixed inset-0 z-[99999] flex justify-center">
      <div className="bg-black opacity-40 absolute inset-0 z-[-1]"></div>
      <section
        ref={modalRef}
        className="flex justify-center items-center h-fit my-auto"
        onMouseDown={handleInsideClick}
      >
        <div
          className={`min-w-[90vw] sm:min-w-[500px] ${
            darkMode ? "bg-darkMode" : "bg-white"
          } p-7 rounded-lg`}
        >
          <OptionsHeader taskName={taskName} />
          <p className="text-[.8rem] mb-5">{taskDesc}</p>
          <p className="text-[.75rem] font-bold mb-2">
            Subtasks ({completedSubs} of {subtasks.length})
          </p>
          <SubtasksList subtasks={subtasks} />
        </div>
      </section>
    </div>
  );
};

export default TaskOptions;
