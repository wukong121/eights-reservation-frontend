import {createSlice, PayloadAction} from '@reduxjs/toolkit'

interface AlertState {
  value: {
    type: string;
    message: string;
    showAfterRedirect?: boolean;
  } | null;
}

const createInitState = (): AlertState => {
  return {
    value: null,
  };
};

const createReducers = {
  success: (state: AlertState,
            action: PayloadAction<{ message: string; showAfterRedirect?: boolean }>) => {
    state.value = {
      type: 'alert-success',
      message: action.payload.message,
      showAfterRedirect: action.payload.showAfterRedirect,
    };
  },
  error: (state: AlertState,
          action: PayloadAction<{ message: string; showAfterRedirect?: boolean }>) => {
    state.value = {
      type: 'alert-danger',
      message: action.payload.message,
      showAfterRedirect: action.payload.showAfterRedirect,
    };
  },
  clear: (state: AlertState) => {
    if (state.value?.showAfterRedirect) {
      state.value.showAfterRedirect = false;
    } else {
      state.value = null;
    }
  }
};

const name = 'alert';
const initState = createInitState();
const slice = createSlice({
  name: name,
  initialState: initState,
  reducers: createReducers,
});

export const alertActions = {...slice.actions};
export const alertReducer = slice.reducer;