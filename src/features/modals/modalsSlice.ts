import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from '@reduxjs/toolkit'

export interface CounterState {
  addBoardModal: boolean;
}

const initialState: CounterState = {
  addBoardModal: false,
};

export const modalsSlice = createSlice({
  name: "modals",
  initialState,
  reducers: {
    setAddBoardModal: (state) => {
      state.addBoardModal = !state.addBoardModal;
    },
  },
});

// Action creators are generated for each case reducer function
export const { setAddBoardModal } = modalsSlice.actions;

export default modalsSlice.reducer;
