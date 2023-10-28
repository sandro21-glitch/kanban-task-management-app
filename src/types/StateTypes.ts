export type StateTypes = {
  allTask: {
    boardName: string;
    todos: {
      todoName: string;
      status: string;
    }[];
    subtasks: {
      task: string;
      completed: boolean;
    }[];
  }[];
};
