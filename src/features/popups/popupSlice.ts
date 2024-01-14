import { createSlice } from "@reduxjs/toolkit";
// import type { PayloadAction } from "@reduxjs/toolkit";
// import type { RootState } from "../../store";

// Define a type for the slice state
interface PopupState {
  isSidebarOpen: boolean;
}

// Define the initial state using that type
const initialState: PopupState = {
  isSidebarOpen: true,
};

export const counterSlice = createSlice({
  name: "popup",
  initialState,
  reducers: {
    setSidebar: (state) => {
      state.isSidebarOpen = !state.isSidebarOpen;
    },
  },
});

export const { setSidebar } = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
