import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  addBoardModal: boolean;
  editBoardModal: boolean;
  openEditPopup: boolean;
  openClearPopup: boolean;
  newTaskModal: boolean;
  openTaskOptions: boolean;
}

const initialState: CounterState = {
  addBoardModal: false,
  editBoardModal: false,
  openEditPopup: false,
  openClearPopup: false,
  newTaskModal: false,
  openTaskOptions: false,
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
    setNewTaskModal: (state, action: PayloadAction<boolean>) => {
      state.newTaskModal = action.payload;
    },
    setOpenTaskOptions: (state, action: PayloadAction<boolean>) => {
      state.openTaskOptions = action.payload;
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
} = modalsSlice.actions;

export default modalsSlice.reducer;
