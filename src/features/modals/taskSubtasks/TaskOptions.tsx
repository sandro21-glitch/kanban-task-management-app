import { useAppSelector } from "../../../hooks/reduxHooks";
import OptionsHeader from "./OptionsHeader";
import SubtasksList from "./SubtasksList";

type TaskOptionTypes = {
  taskName: string;
  taskDesc?: string;
  subtasks: { subtaskName: string; isCompleted: boolean }[];
};
const TaskOptions = ({ taskName, taskDesc, subtasks }: TaskOptionTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  const completedSubs = subtasks.filter((task) => task.isCompleted).length;
  return (
    <div className="w-screen h-screen fixed inset-0 z-[99999] flex justify-center">
      <div className=" bg-black opacity-40 absolute inset-0 z-[-1]"></div>
      <section className="flex justify-center items-center h-fit my-auto">
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
