import React, { FC, ReactElement } from "react";
import { Navigate } from "react-router-dom";

interface PrivateRouteProps {
  children: ReactElement;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  // const authContext = useContext(AuthContext);
  const localStorageToken = JSON.parse(localStorage.getItem("token") || "{}");
  return localStorageToken.access ? children : <Navigate to="/" />;
};
