import { createContext, useContext, ReactNode, useReducer } from "react";
import { tasksReducer } from "../reducers/tasksReducer";
import { Actions } from "../types/Actions";
import { BoardTypes, StateTypes } from "../types/StateTypes";

type TasksContextType = {
  state: StateTypes;
  dispatch: React.Dispatch<Actions>;
  addNewBoard: (board: BoardTypes) => void;
  setActiveBoardIndex: (index: number) => void;
};

const TasksProvider = createContext<TasksContextType | null>(null);

const initialState = {
  board: [],
  activeBoard: null,
};

const TasksContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);

  const addNewBoard = (boardData: BoardTypes): void => {
    dispatch({ type: "ADD_NEW_BOARD", payload: boardData });
  };

  const setActiveBoardIndex = (index: number): void => {
    dispatch({ type: "SET_ACTIVE_BOARD", payload: index });
  };

  return (
    <TasksProvider.Provider
      value={{ state, dispatch, addNewBoard, setActiveBoardIndex }}
    >
      {children}
    </TasksProvider.Provider>
  );
};

export const useTasksContext = () => {
  const context = useContext(TasksProvider);
  if (!context) {
    throw new Error("useChatContext must be used within a ChatProvider");
  }
  return context;
};

export default TasksContext;
