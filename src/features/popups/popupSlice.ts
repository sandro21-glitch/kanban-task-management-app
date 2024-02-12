import { PayloadAction, createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";

// Define a type for the slice state
interface PopupState {
  isSidebarOpen: boolean;
}

// Define the initial state using that type
const initialState: PopupState = {
  isSidebarOpen: window.innerWidth > 640,
};

export const counterSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setSidebar: (state, action: PayloadAction<boolean>) => {
      state.isSidebarOpen = action.payload;
    },
  },
});

export const { setSidebar } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
