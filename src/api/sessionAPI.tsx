import {SignUpValueType} from "../types";
import axios, {AxiosError} from "axios";
import config from "./axios";

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