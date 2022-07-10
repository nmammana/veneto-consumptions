import React, { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface PublicRouteProps {
  children: ReactElement;
}

export const PublicRoute: FC<PublicRouteProps> = ({ children }) => {
  const localStorageToken = JSON.parse(localStorage.getItem("token") || "{}");
  return !localStorageToken.access ? children : <Navigate to="/stays" />;
};
