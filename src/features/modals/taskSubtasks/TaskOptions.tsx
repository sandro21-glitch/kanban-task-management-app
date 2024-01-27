import { useAppSelector } from "../../../hooks/reduxHooks";
type TaskOptionTypes = {
  taskName: string;
  taskDesc?: string;
  subtasks: { subtaskName: string; isCompleted: boolean }[];
};
const TaskOptions = ({ taskName, taskDesc, subtasks }: TaskOptionTypes) => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  return (
    <div className="w-screen h-screen fixed inset-0 z-[99999] flex justify-center">
      <div className=" bg-black opacity-40 absolute inset-0 z-[-1]"></div>
      <section className="flex justify-center items-center h-fit my-auto">
        <div
          className={`min-w-[90vw] sm:min-w-[700px] ${
            darkMode ? "bg-darkMode" : "bg-white"
          } p-7 rounded-lg`}
        >
          {taskName}
          <p>{taskDesc}</p>
          <ul>
            {subtasks.map((subtask, index) => {
              return (
                <li key={index} className="flex items-center gap-2">
                  <input type="checkbox" checked={subtask.isCompleted} />
                  <div>{subtask.subtaskName}</div>
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
