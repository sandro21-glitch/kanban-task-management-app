export type TodoType = {
  status: string;
  statusTodos: {
    todoName: string;
    subtasks: {
      subtaskName: string;
      completed: boolean;
    }[];
  }[];
};

export type BoardTypes = {
  boardName: string;
  todos: TodoType[];
};
export type StateTypes = {
  board: BoardTypes[];
  activeBoard: number | null;
  selectedBoard: BoardTypes | null;
};
