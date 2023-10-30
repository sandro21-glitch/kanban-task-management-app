export type StateTypes = {
  board: {
    boardName: string;
    todos: {
      status: string;
    }[];
  }[];
  activeBoard: number | null;
};

export type BoardTypes = {
  boardName: string;
  todos: {
    status: string;
  }[];
};
