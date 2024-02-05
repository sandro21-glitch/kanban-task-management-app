import { createSelector, createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";
import { ActiveStatus } from "../modals/addTask/AddNewTask";
import { v4 as uuidv4 } from "uuid";
import { BoardState, TaskType } from "../../types/BoardTypes";

const initialState: BoardState = {
  boards: [
    {
      id: 1,
      name: "Main Board",
      isActive: true,
      boardTodos: [
        {
          todoName: "Todo",
          todoId: "98b04129-c264-456f-ba4a-0bbb6a4e276b",
          todoTasks: [
            {
              taskName: "Coffe Break",
              taskDesc: "learning while drinking",
              taskId: "1",
              subtasks: [
                {
                  subtaskId: "b014fd92-e968-4976-8a6b-5a6bdebfae75",
                  subtaskName: "Make Coffe",
                  isCompleted: false,
                },
                {
                  subtaskId: "d4ea38c4-dfa3-468f-9d1d-48998f48de92",
                  subtaskName: "Suibtask2",
                  isCompleted: false,
                },
              ],
            },
          ],
        },
        {
          todoName: "Doing",
          todoId: "4282310d-1f0b-449e-9d58-8c11f004f37b",
          todoTasks: [],
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
    assignTodoTaskToColumn: (
      state,
      action: PayloadAction<{ todoId: string; taskId: string }>
    ) => {
      const { boards } = state;
      const activeBoard = boards.find((board) => board.isActive);
      const { taskId, todoId } = action.payload;

      if (activeBoard) {
        // Find the original todo column and map the tasks
        const originalTodoCol = activeBoard.boardTodos.map((todo) => {
          const todoTasks = todo.todoTasks.filter(
            (task) => task.taskId === taskId
          );
          if (todoTasks.length > 0) {
            todo.todoTasks = todo.todoTasks.filter(
              (task) => task.taskId !== taskId
            );
          }
          return todoTasks;
        });
        // Find the new todo column
        const newTodo = activeBoard.boardTodos.find(
          (todo) => todo.todoId === todoId
        );
        if (newTodo) {
          originalTodoCol.map((tasks) => newTodo.todoTasks.push(...tasks));
        }
      }
    },
    deleteTask: (state, action: PayloadAction<string>) => {
      const { boards } = state;
      const activeBoard = boards.find((board) => board.isActive);
      if (activeBoard) {
        const updateTodo = activeBoard.boardTodos.map((todo) => {
          const DeleteTask = todo.todoTasks.filter(
            (task) => task.taskId !== action.payload
          );
          return { ...todo, todoTasks: DeleteTask };
        });
        activeBoard.boardTodos = updateTodo;
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
  assignTodoTaskToColumn,
  deleteTask,
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
