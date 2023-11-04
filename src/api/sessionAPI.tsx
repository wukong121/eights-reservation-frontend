import {LoginValueType, SignUpValueType} from "../types";
import axios, {AxiosError} from "axios";
import config from "./axios";
import {createAsyncThunk, Dispatch} from "@reduxjs/toolkit";
import {alertActions} from "../store/alert.slice";
import {authActions} from "../store/auth.slice";
import {history} from "../helpers/history";
import {simulateLogin} from "../helpers/fakeBackend";

const BASE_URL: string = 'http://localhost:8080/api/v1';
const LOGIN_URL: string = `${BASE_URL}/oauth/token`;
const LOGOUT_URL: string = `${BASE_URL}/oauth/revoke`;
const SIGNUP_URL: string = `${BASE_URL}/register`;
const CURRENT_USER_URL: string = `${BASE_URL}/users/me`;

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const registerAction = async (value: SignUpValueType) => {
  try {
    const response = await axios.post(SIGNUP_URL, value, config);
    console.log(response);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
  }
};

export const loginAction = createAsyncThunk('auth/login', async (value: LoginValueType, {dispatch}) => {
  dispatch(alertActions.clear());
  try {
    // const response = await axios.post(LOGIN_URL, value, config);
    const simulateResponse = await simulateLogin();
    const response = await simulateResponse.json()
    console.log("simulated response: ", response);
    dispatch(authActions.setAuth(response.data));
    // store user details and jwt token in local storage to keep user logged in between page refreshes
    localStorage.setItem('auth', JSON.stringify(response.data));
    const {from} = history.location!.state || {from: {pathname: "/"}};
    console.log("from: ", from);
    history.navigate!(from);
  } catch (error: any) {
    console.log(error);
    dispatch(alertActions.error({message: error}))
  }
});

export const logoutAction = createAsyncThunk('auth/logout', async (value: any, {dispatch}) => {
  dispatch(authActions.setAuth(null));
  localStorage.removeItem('auth');
  history.navigate!('/login');
})