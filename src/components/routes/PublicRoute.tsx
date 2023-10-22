import React from "react";
import {RouteProps} from "../../types";
import {useNavigate} from "react-router-dom";
import Spinner from "../Spinner";
import PropTypes from "prop-types";


const PublicRoute: React.FC<RouteProps> = ({children}) => {
  const loading = false;
  const accessToken = false;
  const navigate = useNavigate();

  if (!accessToken && !loading) {
    return <>{children}</>;
  }
  if (loading) {
    return <Spinner/>
  }
  if (accessToken && !loading) {
    navigate("/login");
    return null;
  }
  return <p>Something went wrong!</p>
};

PublicRoute.propTypes = {
  children: PropTypes.node.isRequired,
};

export default PublicRoute;
