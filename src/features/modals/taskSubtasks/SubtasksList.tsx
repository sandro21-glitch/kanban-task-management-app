import SingleSubtask from "./SingleSubtask";

type SubtaskLists = {
  subtasks: {
    subtaskName: string;
    isCompleted: boolean;
  }[];
};

const SubtasksList = ({ subtasks }: SubtaskLists) => {
  return (
    <ul className="flex flex-col gap-3">
      {subtasks.map((subtask, index) => {
        return (
          <SingleSubtask
            key={index}
            completed={subtask.isCompleted}
            subtaskName={subtask.subtaskName}
          />
        );
      })}
    </ul>
  );
};

export default SubtasksList;
