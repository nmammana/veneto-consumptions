import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { LocalizationProvider } from "@mui/x-date-pickers";
import { AdapterLuxon } from "@mui/x-date-pickers/AdapterLuxon";
import { injectStyle } from "react-toastify/dist/inject-style";
import Loading from "./components/common/Loading/Loading";
import { CreateOrEditStay } from "./components/pages/CreateOrEditStay/CreateOrEditStay";
import "./styles/Reset.scss";
import { Auth } from "./components/pages/Auth/Auth";
import { AuthContextProvider } from "./components/context/AuthContext";
import { AxiosContextProvider } from "./components/context/AxiosContext";
import { AdminPageContextProvider } from "./components/context/AdminPageContext";
import { StaysContextProvider } from "./components/context/StaysContext";
import { PrivateRoute } from "./components/routes/PrivateRoute";
import { Products } from "./components/pages/Products/Products";
import { Stays } from "./components/pages/Stays/Stays";
import { NotFound } from "./components/pages/NotFound/NotFound";
import { PublicRoute } from "./components/routes/PublicRoute";
import { ProductsContextProvider } from "./components/context/ProductsContext";
import { ApartmentsContextProvider } from "./components/context/ApartmentsContext";
import { Consumptions } from "./components/pages/Consumptions/Consumptions";
import { UserConsumptions } from "./components/pages/UserConsumptions/UserConsumptions";

// CALL IT ONCE IN YOUR APP
if (typeof window !== "undefined") {
  injectStyle();
}

export const App = () => {
  return (
    <LocalizationProvider dateAdapter={AdapterLuxon} adapterLocale="es">
      <AuthContextProvider>
        <AxiosContextProvider>
          <AdminPageContextProvider>
            <ApartmentsContextProvider>
              <StaysContextProvider>
                <ProductsContextProvider>
                  <BrowserRouter>
                    <Suspense fallback={<Loading />}>
                      <Routes>
                        {/* **** Public Routes **** */}
                        <Route path="/" element={<Navigate to="/inicio" />} />
                        <Route
                          path="/inicio"
                          element={
                            <PublicRoute>
                              <Auth />
                            </PublicRoute>
                          }
                        />
                        {/* **** Private Routes **** */}
                        <Route
                          path="/estadias"
                          element={
                            <PrivateRoute>
                              <Stays />
                            </PrivateRoute>
                          }
                        />
                        <Route
                          path="/productos"
                          element={
                            <PrivateRoute>
                              <Products />
                            </PrivateRoute>
                          }
                        />
                        <Route
                          path="/editar-estadia"
                          element={
                            <PrivateRoute>
                              <CreateOrEditStay />
                            </PrivateRoute>
                          }
                        />
                        <Route
                          path="/editar-estadia/:stayId"
                          element={
                            <PrivateRoute>
                              <CreateOrEditStay />
                            </PrivateRoute>
                          }
                        />
                        <Route
                          path="/consumos/:stayId"
                          element={
                            <PrivateRoute>
                              <Consumptions />
                            </PrivateRoute>
                          }
                        />
                        <Route
                          path="/codigo/:qrCode"
                          element={<UserConsumptions />}
                        />
                        <Route path="*" element={<NotFound />} />
                      </Routes>
                    </Suspense>
                  </BrowserRouter>
                </ProductsContextProvider>
              </StaysContextProvider>
            </ApartmentsContextProvider>
          </AdminPageContextProvider>
        </AxiosContextProvider>
      </AuthContextProvider>
    </LocalizationProvider>
  );
};
