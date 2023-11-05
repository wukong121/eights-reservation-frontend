import React from "react";
import {RouteProps} from "../../types";
import {useSelector} from "react-redux";
import {history} from "../../helpers/history";
import {Navigate} from "react-router-dom";
import {RootState} from "../../store";

const PrivateRoute: React.FC<RouteProps> = ({children}) => {
  const auth = useSelector((state: RootState) => state.auth.value)
  if (!auth) {
    return <Navigate to="/login" state={{from: history.location}}/>
  }
  return <>{children}</>;
};

export default PrivateRoute;