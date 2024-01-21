import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";

export interface CounterState {
  addBoardModal: boolean;
  editBoardModal: boolean;
  openEditPopup: boolean;
}

const initialState: CounterState = {
  addBoardModal: false,
  editBoardModal: false,
  openEditPopup: false,
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
  },
});

// Action creators are generated for each case reducer function
export const { setAddBoardModal, setEditBoardModal, openEditBoardPopModal } =
  modalsSlice.actions;

export default modalsSlice.reducer;
