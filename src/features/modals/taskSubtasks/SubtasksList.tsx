import SingleSubtask from "./SingleSubtask";

type SubtaskLists = {
  subtasks: {
    subtaskId: string;
    subtaskName: string;
    isCompleted: boolean;
  }[];
  todoId: string;
};

const SubtasksList = ({ subtasks, todoId }: SubtaskLists) => {
  return (
    <ul className="flex flex-col gap-3">
      {subtasks.map((subtask) => {
        const { subtaskId, isCompleted } = subtask;
        return (
          <SingleSubtask
            key={subtaskId}
            isCompleted={isCompleted}
            subtaskId={subtaskId}
            todoId={todoId}
            subtaskName={subtask.subtaskName}
          />
        );
      })}
    </ul>
  );
};

export default SubtasksList;
