import React, { FC, ReactElement, useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface PrivateRouteProps {
  children: ReactElement;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const authContext = useContext(AuthContext);
  return authContext?.getAccess() ? children : <Navigate to="/" />;
};
