import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./features/popups/popupSlice";
import themeReducer from "./features/ThemeSwitcher/themeSlice";
import boardReducer from "./features/board/boardsSlice";
import modalsReducer from "./features/modals/modalsSlice";
export const store = configureStore({
  reducer: {
    board: boardReducer,
    popup: popupReducer,
    theme: themeReducer,
    modals: modalsReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
