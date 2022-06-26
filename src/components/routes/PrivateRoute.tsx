import React, { FC, ReactElement, useContext, useEffect } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

interface PrivateRouteProps {
  children: ReactElement;
}

export const PrivateRoute: FC<PrivateRouteProps> = ({ children }) => {
  const authContext = useContext(AuthContext);
  // TODO: Chequear si es valido hacer esto o si es una negrada
  useEffect(() => {
    const localStorageToken = JSON.parse(localStorage.getItem("token") || "{}");
    if (localStorageToken?.access) {
      authContext?.setAuthState({
        access: localStorageToken.access,
        refresh: localStorageToken.refresh,
        authenticated: true
      });
    }
  }, []);

  return authContext?.getAccess() ? children : <Navigate to="/" />;
};
