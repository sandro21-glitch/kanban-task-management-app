import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../store";

// Define a type for the slice state
interface CounterState {}

// Define the initial state using that type
const initialState: CounterState = {};

export const counterSlice = createSlice({
  name: "counter",
  initialState,
  reducers: {},
});

export const {} = counterSlice.actions;

// Other code such as selectors can use the imported `RootState` type
// export const selectCount = (state: RootState) => state.counter.value;

export default counterSlice.reducer;
