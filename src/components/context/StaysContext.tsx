import { DateTime } from "luxon";
import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { notUndefined, Stay, StaySearchParams } from "../../types/types";
import { AuthContext } from "./AuthContext";
import { AxiosContext } from "./AxiosContext";

interface StaysContextProps {
  currentStay: Stay;
  setCurrentStay: Dispatch<SetStateAction<Stay>>;
  stayList: Stay[];
  setStayList: Dispatch<SetStateAction<Stay[]>>;
  isLoadingStayList: boolean;
  setIsLoadingStayList: Dispatch<SetStateAction<boolean>>;
  staySearchParams: StaySearchParams;
  setStaySearchParams: Dispatch<SetStateAction<StaySearchParams>>;
}

interface StaysContextProviderProps {
  children: ReactNode;
}

export const StaysContext = createContext<StaysContextProps>(undefined as any);

export const StaysContextProvider: FC<StaysContextProviderProps> = ({
  children
}) => {
  const { authAxios } = useContext(AxiosContext);
  const { authState } = useContext(AuthContext);
  const { authenticated } = authState;
  const [currentStay, setCurrentStay] = useState<Stay>({ users: [] });
  const [stayList, setStayList] = useState<Stay[]>([]);
  const [isLoadingStayList, setIsLoadingStayList] = useState<boolean>(false);
  const [staySearchParams, setStaySearchParams] = useState<StaySearchParams>({
    apartment: undefined,
    start_date: DateTime.fromISO(
      DateTime.local().minus({ months: 1 }).toISO()
    ).toFormat("yyyy-MM-dd")
  });

  const getStaysQueryParams = useCallback(() => {
    const apartmentSearchParam = staySearchParams.apartment
      ? `apartment=${staySearchParams.apartment}`
      : undefined;
    const startDateSearchParam = staySearchParams.start_date
      ? `start_date=${staySearchParams.start_date}`
      : undefined;
    const endDateSearchParam = staySearchParams.end_date
      ? `end_date=${staySearchParams.end_date}`
      : undefined;
    const accountStateSearchParam = staySearchParams.payed
      ? `payed=${staySearchParams.payed}`
      : undefined;
    return [
      apartmentSearchParam,
      startDateSearchParam,
      endDateSearchParam,
      accountStateSearchParam
    ]
      .filter(notUndefined)
      .join("&");
  }, [staySearchParams]);

  useEffect(() => {
    if (authenticated) {
      const getStayList = async (): Promise<Stay[]> => {
        const stayListResponse = await authAxios.get(
          `/stay?${getStaysQueryParams()}`
        );
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
  }, [authAxios, authenticated, getStaysQueryParams]);

  const staysContextValues = useMemo(
    () => ({
      currentStay,
      setCurrentStay,
      stayList,
      setStayList,
      isLoadingStayList,
      setIsLoadingStayList,
      staySearchParams,
      setStaySearchParams
    }),
    [currentStay, stayList, isLoadingStayList, staySearchParams]
  );
  return (
    <StaysContext.Provider value={staysContextValues}>
      {children}
    </StaysContext.Provider>
  );
};
