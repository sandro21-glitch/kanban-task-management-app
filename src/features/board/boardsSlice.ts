import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

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
    addNewBoard: (
      state,
      action: PayloadAction<{ boardName: string; boardCols: string[] }>
    ) => {
      state.boards.push({
        id: state.boards.length + 1,
        name: action.payload.boardName,
        isActive: false,
        boardTodos: action.payload.boardCols.map((column) => ({
          todoName: column,
          todoTasks: [],
        })),
      });
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
    editBoardCols: () => {},
    editBoardName: (state, action: PayloadAction<string>) => {
      const activeBoard = state.boards.find((board) => board.isActive);
      if (activeBoard) {
        activeBoard.name = action.payload;
      }
    },
  },
});

export const { addNewBoard, setActiveBoard, editBoardCols, editBoardName } =
  boardSlice.actions;

// selects only the active boards from the Redux state.
export const selectActiveBoard = createSelector(
  (state: RootState) => state.board.boards,
  (boards) => {
    const firstActiveBoard = boards.find((board) => board.isActive);
    return firstActiveBoard || null;
  }
);

export default boardSlice.reducer;
