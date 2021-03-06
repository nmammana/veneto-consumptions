import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import Loading from "./components/common/Loading/Loading";
import { Home } from "./components/pages/Home/Home";
import { CreateOrEditStay } from "./components/pages/CreateOrEditStay/CreateOrEditStay";
import "./styles/Reset.scss";
import { Auth } from "./components/pages/Auth/Auth";
import { AuthContextProvider } from "./components/context/AuthContext";
import { AxiosContextProvider } from "./components/context/AxiosContext";
import { PublicRoute } from "./components/routes/PublicRoute";
import { PrivateRoute } from "./components/routes/PrivateRoute";
import { AdminPageContextProvider } from "./components/context/AdminPageContext";

export const App = () => {
  return (
    <AuthContextProvider>
      <AxiosContextProvider>
        <AdminPageContextProvider>
          <BrowserRouter>
            <Suspense fallback={<Loading />}>
              <Routes>
                {/* **** Public Routes **** */}
                <Route path="/" element={<Navigate to="/login" />} />
                <Route
                  path="/login"
                  element={
                    <PublicRoute>
                      <Auth />
                    </PublicRoute>
                  }
                />
                {/* **** Private Routes **** */}
                {/* TODO: Change /home route to private when auth is done */}
                <Route path="/home" element={<Home />} />
                <Route
                  path="/edit"
                  element={
                    <PrivateRoute>
                      <CreateOrEditStay />
                    </PrivateRoute>
                  }
                />
              </Routes>
            </Suspense>
          </BrowserRouter>
        </AdminPageContextProvider>
      </AxiosContextProvider>
    </AuthContextProvider>
  );
};
