// import { StateTypes } from "./StateTypes";

import { BoardTypes } from "./StateTypes";
import { TodoType } from "./StateTypes";
export type Actions =
  | {
      type: "TOGGLE_LAYOUT";
      payload: string;
    }
  | {
      type: "ADD_NEW_BOARD";
      payload: BoardTypes;
    }
  | {
      type: "SET_ACTIVE_BOARD";
      payload: number;
    }
  | {
      type: "ADD_TODO";
      payload: { todoData: TodoType; colName: string };
    };
