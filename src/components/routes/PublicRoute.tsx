import React, { FC, ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface PublicRouteProps {
  children: ReactElement;
}

export const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
  const authContext = useContext(AuthContext);

  return !authContext?.getAccess() ? children : <Navigate to="/home" />;
};
