import DeleteTaskBtn from "./DeleteTaskBtn";
import EditTaskBtn from "./EditTaskBtn";

type TaskSettingTypes = {
  taskId: string;
};

const TaskSettings = ({ taskId }: TaskSettingTypes) => {
  return (
    <div
      className="absolute top-16 right-[-85px] w-[192px] shadow-modal bg-white p-4 z-[9999] rounded-[8px]
    flex flex-col gap-2 items-start"
    >
      <EditTaskBtn />
      <DeleteTaskBtn taskId={taskId} />
    </div>
  );
};

export default TaskSettings;
