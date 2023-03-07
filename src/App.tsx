import React, { Suspense } from "react";
import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom";
import { injectStyle } from "react-toastify/dist/inject-style";
import { ToastContainer } from "react-toastify";
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
import { UserConsumptions } from "./components/pages/UserConsumptions/UserConsumptions";
import { Spinner } from "./components/common/Spinner/Spinner";
import { Layout } from "./components/common/Layout/Layout";
import { StayConsumptions } from "./components/pages/StayConsumptions/StayConsumptions";
import { Consumptions } from "./components/pages/Consumptions/Consumptions";
import { IdleTimerWrapper } from "./components/common/IdleTimerWrapper/IdleTimerWrapper";

// CALL IT ONCE IN YOUR APP
if (typeof window !== "undefined") {
  injectStyle();
}

export const App = () => {
  return (
    <AuthContextProvider>
      <AxiosContextProvider>
        <AdminPageContextProvider>
          <ApartmentsContextProvider>
            <StaysContextProvider>
              <ProductsContextProvider>
                <BrowserRouter>
                  <IdleTimerWrapper>
                    <Suspense
                      fallback={
                        <Layout>
                          <Spinner />
                        </Layout>
                      }
                    >
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
                          path="/consumos"
                          element={
                            <PrivateRoute>
                              <Consumptions />
                            </PrivateRoute>
                          }
                        />
                        <Route
                          path="/consumos/:stayId"
                          element={
                            <PrivateRoute>
                              <StayConsumptions />
                            </PrivateRoute>
                          }
                        />
                        <Route
                          path="/codigo/:qrCode"
                          element={
                            <PrivateRoute>
                              <UserConsumptions />
                            </PrivateRoute>
                          }
                        />
                        <Route path="*" element={<NotFound />} />
                      </Routes>

                      <ToastContainer
                        position="bottom-center"
                        autoClose={5000}
                        hideProgressBar={false}
                        newestOnTop={false}
                        closeOnClick
                        rtl={false}
                        pauseOnFocusLoss
                        draggable
                        pauseOnHover
                        theme="light"
                      />
                    </Suspense>
                  </IdleTimerWrapper>
                </BrowserRouter>
              </ProductsContextProvider>
            </StaysContextProvider>
          </ApartmentsContextProvider>
        </AdminPageContextProvider>
      </AxiosContextProvider>
    </AuthContextProvider>
  );
};
