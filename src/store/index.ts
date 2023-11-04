import {configureStore} from "@reduxjs/toolkit";
import {alertReducer} from "./alert.slice";
import {authReducer} from "./auth.slice";

export const store = configureStore({
  reducer: {
    alert: alertReducer,
    auth: authReducer,

  }
});

export type RootState = ReturnType<typeof store.getState>