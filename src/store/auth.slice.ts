import {PayloadAction} from "@reduxjs/toolkit";

type User = {
  userId: string;
  username: string;
}
interface AuthState {
  value: {
    user: User;
    token: string;
  };
}

const safeJSONParse = (item: string | null) => {
  if (item === null) {
    return null;
  }
  try {
    return JSON.parse(item);
  } catch (error) {
    console.error('JSON parsing error:', error);
    return null;
  }
}

const createInitState = () => {
  return {
    value: safeJSONParse(localStorage.getItem("auth")),
  };
};

const createReducers = {
  setAuth: (state: AuthState, action: PayloadAction<{ user: User; token: string; }>) => {
    state.value = action.payload;
  },
}



export {};