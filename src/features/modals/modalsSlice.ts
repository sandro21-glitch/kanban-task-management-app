import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  addBoardModal: boolean;
  editBoardModal: boolean;
  openEditPopup: boolean;
  openClearPopup: boolean;
  newTaskModal: boolean;
}

const initialState: CounterState = {
  addBoardModal: false,
  editBoardModal: false,
  openEditPopup: false,
  openClearPopup: false,
  newTaskModal: false,
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
  },
});

// Action creators are generated for each case reducer function
export const {
  setAddBoardModal,
  setEditBoardModal,
  openEditBoardPopModal,
  setOpenClearPopup,
  setNewTaskModal,
} = modalsSlice.actions;

export default modalsSlice.reducer;
