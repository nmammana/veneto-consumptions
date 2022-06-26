import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import Loading from "./components/common/Loading/Loading";
import { Home } from "./components/pages/Home/Home";
import { CreateOrEditStay } from "./components/pages/CreateOrEditStay/CreateOrEditStay";
import "./styles/Reset.scss";
import { Auth } from "./components/pages/Auth/Auth";
import { AuthContextProvider } from "./components/context/AuthContext";
import { AxiosContextProvider } from "./components/context/AxiosContext";
import { PublicRoute } from "./components/routes/PublicRoute";
import { AdminPageContextProvider } from "./components/context/AdminPageContext";
import { PrivateRoute } from "./components/routes/PrivateRoute";
import { CreateOrEditProduct } from "./components/pages/CreateOrEditProduct/CreateOrEditProduct";

export const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="es">
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
                  <Route
                    path="/home"
                    element={
                      <PrivateRoute>
                        <Home />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/editStay"
                    element={
                      <PrivateRoute>
                        <CreateOrEditStay />
                      </PrivateRoute>
                    }
                  />
                  <Route
                    path="/editProduct"
                    element={
                      <PrivateRoute>
                        <CreateOrEditProduct />
                      </PrivateRoute>
                    }
                  />
                </Routes>
              </Suspense>
            </BrowserRouter>
          </AdminPageContextProvider>
        </AxiosContextProvider>
      </AuthContextProvider>
    </LocalizationProvider>
  );
};
