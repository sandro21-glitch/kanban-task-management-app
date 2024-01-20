import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  addBoardModal: boolean;
  editBoardModal: boolean;
}

const initialState: CounterState = {
  addBoardModal: false,
  editBoardModal: true,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setAddBoardModal: (state) => {
      state.addBoardModal = !state.addBoardModal;
    },
    setEditBoardModal: (state) => {
      state.editBoardModal = !state.editBoardModal;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAddBoardModal, setEditBoardModal } = modalsSlice.actions;

export default modalsSlice.reducer;
