import { configureStore } from "@reduxjs/toolkit";
import popupReducer from "./features/popups/popupSlice";
import themeReducer from "./features/ThemeSwitcher/themeSlice";

export const store = configureStore({
  reducer: {
    popup: popupReducer,
    theme: themeReducer,
  },
});

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;
