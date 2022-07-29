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
import { CreateOrEditProduct } from "./components/pages/CreateOrEditProduct/CreateOrEditProduct";
import { Products } from "./components/pages/Products/Products";
import { Stays } from "./components/pages/Stays/Stays";
import { NotFound } from "./components/pages/NotFound/NotFound";
import { PublicRoute } from "./components/routes/PublicRoute";
import { ProductsContextProvider } from "./components/context/ProductsContext";

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
            <StaysContextProvider>
              <ProductsContextProvider>
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
                        path="/stays"
                        element={
                          <PrivateRoute>
                            <Stays />
                          </PrivateRoute>
                        }
                      />
                      <Route
                        path="/products"
                        element={
                          <PrivateRoute>
                            <Products />
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
                        path="/editStay/:stayId"
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
                      <Route
                        path="/editProduct/:itemId"
                        element={
                          <PrivateRoute>
                            <CreateOrEditProduct />
                          </PrivateRoute>
                        }
                      />
                      <Route path="*" element={<NotFound />} />
                    </Routes>
                  </Suspense>
                </BrowserRouter>
              </ProductsContextProvider>
            </StaysContextProvider>
          </AdminPageContextProvider>
        </AxiosContextProvider>
      </AuthContextProvider>
    </LocalizationProvider>
  );
};
