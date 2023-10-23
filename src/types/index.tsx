import {ReactNode} from "react";

export interface RouteProps {
  children: ReactNode;
}

export interface InstanceType {
  headers: {
    'Content-Type': string;
  };
}

enum AuthorityRole {
  ROLE_STUDENT = "ROLE_STUDENT",
  ROLE_ADMIN = "ROLE_ADMIN"
}

export interface RegisterActionType {
  userName: string;
  email: string;
  password: string;
  confirmPassword: string;
  verificationCode: string;
  createTime: string;
  enabled: boolean;
  authority: AuthorityRole;
}