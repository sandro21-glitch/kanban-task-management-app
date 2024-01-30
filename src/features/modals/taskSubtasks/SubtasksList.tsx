import SingleSubtask from "./SingleSubtask";

type SubtaskLists = {
  subtasks: {
    subtaskName: string;
    isCompleted: boolean;
  }[];
  todoId: string;
};

const SubtasksList = ({ subtasks, todoId }: SubtaskLists) => {
  return (
    <ul className="flex flex-col gap-3">
      {subtasks.map((subtask, index) => {
        return (
          <SingleSubtask
            key={index}
            todoId={todoId}
            index={index}
            completed={subtask.isCompleted}
            subtaskName={subtask.subtaskName}
          />
        );
      })}
    </ul>
  );
};

export default SubtasksList;
