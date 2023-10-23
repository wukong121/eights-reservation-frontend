import {RegisterActionType} from "../types";
import axios, {AxiosError} from "axios";
import instance from "./axios";

const BASE_URL: string = 'http://localhost:3000/api/v1';
const LOGIN_URL: string = '${BASE_URL}/oauth/token';
const LOGOUT_URL: string = '${BASE_URL}/oauth/revoke';
const SIGNUP_URL: string = '${BASE_URL}/users';
const CURRENT_USER_URL: string = '${BASE_URL}/users/me';

const CLIENT_ID = process.env.REACT_APP_CLIENT_ID;
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET;

export const registerAction = async (action: RegisterActionType) => {
  const data = {
    action,
    client_id: CLIENT_ID,
    client_secret: CLIENT_SECRET,
  };
  try {
    const response = await axios.post(SIGNUP_URL, data, instance);
    return response.data;
  } catch (error) {
    if (axios.isAxiosError(error)) {
      return error.response?.data;
    }
  }
};