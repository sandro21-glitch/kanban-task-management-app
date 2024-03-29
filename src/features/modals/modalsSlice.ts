import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { SingleTaskTypes } from "../../types/BoardTypes";

export interface CounterState {
  addBoardModal: boolean;
  editBoardModal: boolean;
  openEditPopup: boolean;
  openClearPopup: boolean;
  newTaskModal: boolean;
  openTaskOptions: { isOpen: boolean; task: SingleTaskTypes | null };
  openDeletePopup: boolean;
  editTaskModal: {
    isOpen: boolean;
    taskId: string;
    todoId: string;
  };
}

const initialState: CounterState = {
  addBoardModal: false,
  editBoardModal: false,
  openEditPopup: false,
  openClearPopup: false,
  newTaskModal: false,
  openTaskOptions: {
    isOpen: false,
    task: null,
  },
  openDeletePopup: false,
  editTaskModal: {
    isOpen: false,
    taskId: "",
    todoId: "",
  },
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setAddBoardModal: (state, action: PayloadAction<boolean>) => {
      state.addBoardModal = action.payload;
    },
    setEditBoardModal: (state, action: PayloadAction<boolean>) => {
      state.editBoardModal = action.payload;
    },
    openEditBoardPopModal: (state, action: PayloadAction<boolean>) => {
      state.openEditPopup = action.payload;
    },
    setOpenClearPopup: (state, action: PayloadAction<boolean>) => {
      state.openClearPopup = action.payload;
    },
    setOpenDeletePopup: (state, action: PayloadAction<boolean>) => {
      state.openDeletePopup = action.payload;
    },
    setNewTaskModal: (state, action: PayloadAction<boolean>) => {
      state.newTaskModal = action.payload;
    },
    setOpenTaskOptions: (
      state,
      action: PayloadAction<{ isOpen: boolean; task: SingleTaskTypes | null }>
    ) => {
      const { isOpen, task } = action.payload;
      return {
        ...state,
        openTaskOptions: {
          isOpen,
          task,
        },
      };
    },
    openEditTaskModal: (
      state,
      action: PayloadAction<{ isOpen: boolean; taskId: string; todoId: string }>
    ) => {
      state.editTaskModal.isOpen = action.payload.isOpen;
      state.editTaskModal.taskId = action.payload.taskId;
      state.editTaskModal.todoId = action.payload.todoId;
    },
  },
});

export const {
  setAddBoardModal,
  setEditBoardModal,
  openEditBoardPopModal,
  setOpenClearPopup,
  setNewTaskModal,
  setOpenTaskOptions,
  setOpenDeletePopup,
  openEditTaskModal,
} = modalsSlice.actions;

export default modalsSlice.reducer;
