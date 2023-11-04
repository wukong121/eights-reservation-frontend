import {createSlice, PayloadAction} from "@reduxjs/toolkit";
import {loginAction, logoutAction} from "../api/sessionAPI";


type User = {
  userId: string;
  username: string;
}

interface AuthState {
  value: {
    user: User;
    token: string;
  } | null;
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

const createReducers = () => {
  return {
    setAuth: (state: AuthState, action: PayloadAction<{ user: User; token: string; } | null>) => {
      state.value = action.payload;
    }
  };
}

const name = 'auth';
const initState = createInitState();
const reducers = createReducers();
const slice = createSlice({
  name: name,
  initialState: initState,
  reducers: reducers
});

export const authActions = {...slice.actions, loginAction, logoutAction};
export const authReducer = slice.reducer;