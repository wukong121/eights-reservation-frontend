import {ReactNode} from "react";

export interface RouteProps {
  children: ReactNode;
}

type AuthorityRole = "ROLE_STUDENT" | "ROLE_ADMIN"

export interface SignUpValueType {
  email: string;
  gender: string;
  nickName: string;
  password: string;
  confirm: string;
  phone: string;
  prefix: string;
  userName: string;
  agreement: boolean;
}

export interface RegisterResponseType {
  status: string;
  code: number;
  message: string;
  data: string;
}

export interface LoginValueType {
  userName: string;
  password: string;
}