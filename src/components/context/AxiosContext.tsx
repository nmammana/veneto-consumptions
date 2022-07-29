import axios from "axios";
import React, {
  createContext,
  FC,
  ReactNode,
  useContext,
  useMemo
} from "react";
import createAuthRefreshInterceptor from "axios-auth-refresh";
import { AuthContext } from "./AuthContext";

interface AxiosContextProviderProps {
  children: ReactNode;
}

export const AxiosContext = createContext<any>({});

export const AxiosContextProvider: FC<AxiosContextProviderProps> = ({
  children
}) => {
  const authContext = useContext(AuthContext);

  const authAxios = axios.create({
    baseURL: "https://consumos-veneto-village-dev.herokuapp.com/api"
  });

  const publicAxios = axios.create({
    baseURL: "https://consumos-veneto-village-dev.herokuapp.com/api"
  });

  // TODO: Check the eslint rule of no-param-reassign
  authAxios.interceptors.request.use(
    (config: any) => {
      if (!config.headers.Authorization) {
        const accessToken = JSON.parse(localStorage.getItem("token") || "{}");
        // eslint-disable-next-line no-param-reassign
        config.headers.Authorization = `Bearer ${accessToken.access}`;
        /* config.headers.Authorization = `Bearer ${authContext?.getAccess()}`; */
      }

      return config;
    },
    error => {
      return Promise.reject(error);
    }
  );

  const refreshAuthLogic = (failedRequest: any) => {
    const data = {
      // refresh: JSON.parse(localStorage.getItem("token") || "{}").refresh
      refresh: authContext?.authState.refresh
    };
    if (!data.refresh) return Promise.resolve();
    const options = {
      method: "POST",
      data,
      url: "https://consumos-veneto-village-dev.herokuapp.com/api/auth/token/refresh"
    };

    // TODO: Check the eslint rule of no-param-reassign
    return axios(options)
      .then(async tokenRefreshResponse => {
        // eslint-disable-next-line no-param-reassign
        failedRequest.response.config.headers.Authorization = `Bearer ${tokenRefreshResponse.data.access}`;

        authContext?.setAuthState({
          ...authContext.authState,
          access: tokenRefreshResponse.data.access
        });

        await localStorage.setItem(
          "token",
          JSON.stringify({
            access: tokenRefreshResponse.data.access,
            refresh: authContext?.authState.refresh
          })
        );

        return Promise.resolve();
      })
      .catch(error => {
        console.log("error en axios context", error);
        localStorage.removeItem("token");
        authContext?.setAuthState({
          access: "",
          refresh: ""
        });
      });
  };

  if (authContext?.authState.authenticated)
    createAuthRefreshInterceptor(authAxios, refreshAuthLogic, {});

  const axiosContextValues = useMemo(
    () => ({
      authAxios,
      publicAxios
    }),
    [authAxios, publicAxios]
  );

  return (
    <AxiosContext.Provider value={axiosContextValues}>
      {children}
    </AxiosContext.Provider>
  );
};
