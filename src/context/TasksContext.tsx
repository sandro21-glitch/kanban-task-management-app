import { createContext, useContext, ReactNode, useReducer } from "react";
import { tasksReducer } from "../reducers/tasksReducer";
import { Actions } from "../types/Actions";
import { StateTypes } from "../types/StateTypes";

type TasksContextType = {
  state: StateTypes;
  dispatch: React.Dispatch<Actions>;
};

const TasksProvider = createContext<TasksContextType | null>(null);

const initialState = {
  allTask: [
    {
      boardName: "test",
      todos: [
        {
          todoName: "test",
          status: "todo",
        },
      ],
      subtasks: [{ task: "test", completed: false }],
    },
  ],
};

const TasksContext: React.FC<{ children: ReactNode }> = ({ children }) => {
  const [state, dispatch] = useReducer(tasksReducer, initialState);
  console.log(state);
  return (
    <TasksProvider.Provider value={{ state, dispatch }}>
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
