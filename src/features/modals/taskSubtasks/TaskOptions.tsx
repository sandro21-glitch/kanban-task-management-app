import { useAppSelector } from "../../../hooks/reduxHooks";

const TaskOptions = () => {
  const darkMode = useAppSelector((store) => store.theme.darkMode);
  return (
    <div
      className={`min-w-[90vw] sm:min-w-[550px] ${
        darkMode ? "bg-darkMode" : "bg-white"
      } p-7 rounded-lg`}
    >
      TaskOptions
    </div>
  );
};

export default TaskOptions;
