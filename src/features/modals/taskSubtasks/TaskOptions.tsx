import { useRef, useEffect, useCallback } from "react";
import { useAppSelector } from "../../../hooks/reduxHooks";
import OptionsHeader from "./OptionsHeader";
import SubtasksList from "./SubtasksList";
import SubtasksCurrStatus from "./SubtasksCurrStatus";

type TaskOptionTypes = {
  taskName: string;
  taskDesc?: string;
  subtasks: { subtaskId: string; subtaskName: string; isCompleted: boolean }[];
  todoId: string;
  localOpenTaskOptions: boolean;
  setLocalOpenTaskOptions: (open: boolean) => void;
};

const TaskOptions = ({
  taskName,
  taskDesc,
  subtasks,
  todoId,
  localOpenTaskOptions,
  setLocalOpenTaskOptions,
}: TaskOptionTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const completedSubs = subtasks.filter((task) => task.isCompleted).length;
  const modalRef = useRef<HTMLDivElement>(null);

  const closeModal = () => {
    setLocalOpenTaskOptions(false);
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
      // prevent clicks inside the modal from closing it
      event.stopPropagation();
    },
    []
  );

  useEffect(() => {
    if (localOpenTaskOptions) {
      document.addEventListener("mousedown", handleOutsideClick);
    }

    return () => {
      document.removeEventListener("mousedown", handleOutsideClick);
    };
  }, [localOpenTaskOptions, handleOutsideClick]);

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
          } p-7 rounded-lg cursor-default`}
        >
          <OptionsHeader taskName={taskName} />
          <p className="text-[.8rem] mb-5 cursor-text">
            {taskDesc ? taskDesc : ""}
          </p>
          <p className="text-[.75rem] font-bold mb-2">
            Subtasks ({completedSubs} of {subtasks.length})
          </p>
          <SubtasksList subtasks={subtasks} todoId={todoId} />
          <SubtasksCurrStatus todoId={todoId} />
        </div>
      </section>
    </div>
  );
};

export default TaskOptions;
