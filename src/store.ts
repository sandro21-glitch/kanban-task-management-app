import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./features/popups/popupSlice";
import themeReducer from "./features/ThemeSwitcher/themeSlice";
import boardReducer from "./features/board/tasksSlice";
import modalsReducer from "./features/modals/modalsSlice";
export const store = configureStore({
  reducer: {
    board: boardReducer,
    popup: popupReducer,
    theme: themeReducer,
    modals: modalsReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
