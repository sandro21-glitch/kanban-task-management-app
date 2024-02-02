import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { ActiveStatus } from "../modals/addTask/AddNewTask";
import { v4 as uuidv4 } from "uuid";
import { BoardState, TaskType } from "../../types/BoardTypes";

const initialState: BoardState = {
  boards: [],
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
        isActive: state.boards.length === 0 ? true : false,
        boardTodos: action.payload.boardCols.map((column) => ({
          todoName: column,
          todoId: uuidv4(),
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
    editedBoardCols: (state, action: PayloadAction<string[]>) => {
      const activeBoard = state.boards.find((board) => board.isActive);
      if (activeBoard) {
        const newTodos = action.payload
          .filter((_, index) => !activeBoard.boardTodos[index])
          .map((newTodo) => ({
            todoId: uuidv4(),
            todoName: newTodo,
            todoTasks: [],
          }));
        activeBoard.boardTodos.push(...newTodos);

        activeBoard.boardTodos = activeBoard.boardTodos.map((todo, index) => ({
          ...todo,
          todoName: action.payload[index],
        }));
      }
    },
    removeBoardCols: (state) => {
      const activeBoard = state.boards.find((board) => board.isActive);
      if (activeBoard) {
        activeBoard.boardTodos = activeBoard.boardTodos.filter(
          (todo) => todo.todoName
        );
      }
    },
    editBoardName: (state, action: PayloadAction<string>) => {
      const activeBoard = state.boards.find((board) => board.isActive);
      if (activeBoard) {
        activeBoard.name = action.payload;
      }
    },
    clearBoard: (state) => {
      const activeBoard = state.boards.find((board) => board.isActive);
      if (activeBoard) {
        activeBoard.boardTodos = [];
      }
    },
    addNewTask: (
      state,
      action: PayloadAction<{ todoTask: TaskType; activeStatus: ActiveStatus }>
    ) => {
      const activeBoard = state.boards.find((board) => board.isActive);
      const { todoTask, activeStatus } = action.payload;

      if (activeBoard) {
        // add the new task to the active board
        activeBoard.boardTodos.map((todo, index) => {
          if (
            todo.todoName.toLowerCase() ===
              activeStatus.statusName.toLowerCase() &&
            activeStatus.index === index
          ) {
            todo.todoTasks.push(todoTask);
          }
        });
      }
    },
    checkCompletedSubtask: (
      state,
      action: PayloadAction<{
        checked: boolean;
        subtaskId: string;
        todoId: string;
      }>
    ) => {
      const activeBoard = state.boards.find((board) => board.isActive);
      const { todoId, subtaskId, checked } = action.payload;
      if (activeBoard) {
        activeBoard.boardTodos.map((todo) => {
          if (todo.todoId === todoId) {
            todo.todoTasks.map((todoSub) => {
              todoSub.subtasks.map((sub) => {
                if (sub.subtaskId === subtaskId) {
                  sub.isCompleted = checked;
                }
              });
            });
          }
        });
      }
    },
  },
});

export const {
  addNewBoard,
  setActiveBoard,
  editedBoardCols,
  editBoardName,
  removeBoardCols,
  clearBoard,
  addNewTask,
  checkCompletedSubtask,
} = boardSlice.actions;

// selects only the active boards from the Redux state.
export const selectActiveBoard = createSelector(
  (state: RootState) => state.board.boards,
  (boards) => {
    const activeBoard = boards.find((board) => board.isActive);
    return activeBoard || null;
  }
);

export default boardSlice.reducer;
