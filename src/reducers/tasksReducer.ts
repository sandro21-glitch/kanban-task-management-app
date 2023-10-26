import { Actions } from "../types/Actions";
import { StateTypes } from "../types/StateTypes";


export const tasksReducer = (state: StateTypes, action: Actions) => {
  if (action.type === "TOGGLE_LAYOUT") {
    console.log("testing");
  }
  return state;
};
