import { Actions } from "../types/Actions";
import { StateTypes } from "../types/StateTypes";

export const tasksReducer = (state: StateTypes, action: Actions) => {
  if (action.type === "TOGGLE_LAYOUT") {
    // ... your logic here ...
  }
  if (action.type === "ADD_NEW_BOARD") {
    const updateBoard = action.payload;
    return { ...state, board: [...state.board, updateBoard] } as StateTypes;
  }
  if (action.type === "SET_ACTIVE_BOARD") {
    return { ...state, activeBoard: action.payload };
  }
  return state;
};
