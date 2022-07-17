import {
  createContext,
  FC,
  ReactNode,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { Stay } from "../../types/types";
import { AuthContext } from "./AuthContext";
import { AxiosContext } from "./AxiosContext";

interface StaysContextProps {
  stayList: Stay[];
  isLoadingStayList: boolean;
}

interface StaysContextProviderProps {
  children: ReactNode;
}

export const StaysContext = createContext<StaysContextProps | undefined>(
  undefined
);

export const StaysContextProvider: FC<StaysContextProviderProps> = ({
  children
}) => {
  const { authAxios } = useContext(AxiosContext);
  const { authState } = useContext(AuthContext);
  const { authenticated } = authState;
  const [stayList, setStayList] = useState<Stay[]>([]);
  const [isLoadingStayList, setIsLoadingStayList] = useState<boolean>(false);

  useEffect(() => {
    if (authenticated) {
      const getStayList = async (): Promise<Stay[]> => {
        const stayListResponse = await authAxios.get("/stay");
        return stayListResponse.data.results;
      };
      const fetchStayList = async () => {
        setIsLoadingStayList(true);
        const stays = await getStayList();
        setStayList(stays);
        setIsLoadingStayList(false);
      };
      fetchStayList();
    }
  }, [authAxios, authenticated]);

  const staysContextValues = useMemo(
    () => ({
      stayList,
      setStayList,
      isLoadingStayList
    }),
    [stayList, isLoadingStayList]
  );
  return (
    <StaysContext.Provider value={staysContextValues}>
      {children}
    </StaysContext.Provider>
  );
};
