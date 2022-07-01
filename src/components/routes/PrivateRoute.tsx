import React, { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactElement;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("token") || "{}");
  return localStorageToken.access ? children : <Navigate to="/" />;
};
