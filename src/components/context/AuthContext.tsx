import React, {
  createContext,
  FC,
  ReactNode,
  useCallback,
  useEffect,
  useMemo,
  useState
} from "react";
import { User } from "../../types/types";

interface AuthState {
  access: string;
  refresh: string;
  authenticated?: boolean;
  user?: User;
}

interface AuthContextProviderProps {
  children: ReactNode;
}

// TODO: Check typing issue when create context (type any???)
/* interface AuthContextProps {
  authState: AuthState;
  setAuthState: React.Dispatch<React.SetStateAction<AuthState>>;
  logout: () => void;
  getAccess: () => string;
} */

export const AuthContext = createContext<any>(undefined);

export const AuthContextProvider: FC<AuthContextProviderProps> = ({
  children
}) => {
  const [authState, setAuthState] = useState<AuthState>({
    access: null!,
    refresh: null!,
    authenticated: false,
    user: null!
  });

  const logout = useCallback(async () => {
    await localStorage.removeItem("token");
    setAuthState({
      access: null!,
      refresh: null!,
      authenticated: false,
      user: null!
    });
  }, []);

  const getAccess = useCallback(() => {
    return authState.access;
  }, [authState.access]);

  const authContextValues = useMemo(
    () => ({
      authState,
      setAuthState,
      getAccess,
      logout
    }),
    [authState, getAccess, logout]
  );

  useEffect(() => {
    const localStorageToken = JSON.parse(localStorage.getItem("token") || "{}");
    if (localStorageToken?.access && localStorageToken?.refresh)
      setAuthState({
        access: localStorageToken.access,
        refresh: localStorageToken.refresh,
        authenticated: true
      });
  }, []);
  return (
    <AuthContext.Provider value={authContextValues}>
      {children}
    </AuthContext.Provider>
  );
};
