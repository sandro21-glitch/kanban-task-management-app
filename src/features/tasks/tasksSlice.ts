import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";

// Define a type for the slice state
export interface BoardState {
  boards: {
    id: number;
    name: string;
    isActive: boolean;
    boardTodos: {
      todoName: string;
      todoTasks: {
        taskName: string;
        taskDesc: string;
        subtasks: {
          subtaskName: string;
          isCompleted: boolean;
        }[];
      }[];
    }[];
  }[];
}

// Define the initial state using that type
const initialState: BoardState = {
  boards: [
    {
      id: 1,
      name: "TEST BOARD 1",
      isActive: true,
      boardTodos: [
        {
          todoName: "Done",
          todoTasks: [
            {
              taskName: "Task 1",
              taskDesc: "Description 1",
              subtasks: [
                { subtaskName: "Subtask 1", isCompleted: false },
                { subtaskName: "Subtask 2", isCompleted: true },
              ],
            },
          ],
        },
        {
          todoName: "Later",
          todoTasks: [
            {
              taskName: "Task 1",
              taskDesc: "Description 1",
              subtasks: [
                { subtaskName: "Subtask 1", isCompleted: false },
                { subtaskName: "Subtask 2", isCompleted: true },
              ],
            },
          ],
        },
      ],
    },
    {
      id: 2,
      name: "TEST BOARD 2",
      isActive: false,
      boardTodos: [
        {
          todoName: "Done",
          todoTasks: [
            {
              taskName: "Task 1",
              taskDesc: "Description 1",
              subtasks: [
                { subtaskName: "Subtask 1", isCompleted: false },
                { subtaskName: "Subtask 2", isCompleted: false },
              ],
            },
          ],
        },
        {
          todoName: "Later2",
          todoTasks: [
            {
              taskName: "Task 1",
              taskDesc: "Description 1",
              subtasks: [
                { subtaskName: "Subtask 1", isCompleted: false },
                { subtaskName: "Subtask 2", isCompleted: false },
              ],
            },
          ],
        },
      ],
    },
  ],
};

export const boardSlice = createSlice({
  name: "board",
  initialState,
  reducers: {
    addBoard: (state, action: PayloadAction<{ name: string }>) => {
      const { boards } = state;
      const newBoard = action.payload;
      console.log(boards, newBoard);
    },
    setActiveBoard: (state, action: PayloadAction<number>) => {
      const { boards } = state;
      const findActiveBoard = boards.find(
        (board) => board.id === action.payload
      );
      if (findActiveBoard) {
        state.boards = boards.map((board) => ({
          ...board,
          isActive: board.id === findActiveBoard.id,
        }));
      }
    },
  },
});

export const { addBoard, setActiveBoard } = boardSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default boardSlice.reducer;
