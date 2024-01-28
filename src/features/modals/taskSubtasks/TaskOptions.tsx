import { useAppSelector } from "../../../hooks/reduxHooks";
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
          <div className="flex justify-between items-center mb-5">
            <h5 className="font-bold">{taskName}</h5>
            <button>X</button>
          </div>
          <p className="text-[.8rem] mb-5">{taskDesc}</p>
          <p className="text-[.75rem] font-bold mb-2">
            Subtasks ({completedSubs} of {subtasks.length})
          </p>
          <ul className="flex flex-col gap-3">
            {subtasks.map((subtask, index) => {
              return (
                <li
                  key={index}
                  className={`flex items-center gap-2 ${
                    subtask.isCompleted ? "bg-[#f4f7fd]" : "bg-lightPurple"
                  } p-3 rounded-lg`}
                >
                  <input type="checkbox" checked={subtask.isCompleted} />
                  <div
                    className={`${
                      subtask.isCompleted ? "line-through" : "text-black"
                    } text-[.75rem] font-semibold`}
                  >
                    {subtask.subtaskName}
                  </div>
                </li>
              );
            })}
          </ul>
        </div>
      </section>
    </div>
  );
};

export default TaskOptions;
