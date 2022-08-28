import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useContext,
  useEffect,
  useMemo,
  useState
} from "react";
import { Apartment } from "../../types/types";
import { AuthContext } from "./AuthContext";
import { AxiosContext } from "./AxiosContext";

interface ApartmentsContextProps {
  apartmentList: Apartment[];
  setApartmentList: Dispatch<SetStateAction<Apartment[]>>;
  isLoadingApartmentList: boolean;
}

interface ApartmentsContextProviderProps {
  children: ReactNode;
}

export const ApartmentsContext = createContext<ApartmentsContextProps>(
  undefined as any
);

export const ApartmentsContextProvider: FC<ApartmentsContextProviderProps> = ({
  children
}) => {
  const { authAxios } = useContext(AxiosContext);
  const { authState } = useContext(AuthContext);
  const { authenticated } = authState;
  const [apartmentList, setApartmentList] = useState<Apartment[]>([]);
  const [isLoadingApartmentList, setIsLoadingApartmentList] =
    useState<boolean>(false);

  useEffect(() => {
    if (authenticated) {
      const getApartmentList = async (): Promise<Apartment[]> => {
        const apartmentListResponse = await authAxios.get("/apartments/");
        return apartmentListResponse.data;
      };
      const fetchApartments = async () => {
        setIsLoadingApartmentList(true);
        const apartmentsList = await getApartmentList();
        setApartmentList(apartmentsList);
        setIsLoadingApartmentList(false);
      };
      fetchApartments();
    }
  }, [authAxios, authenticated]);

  const apartmentsContextValues = useMemo(
    () => ({
      apartmentList,
      setApartmentList,
      isLoadingApartmentList
    }),
    [apartmentList, isLoadingApartmentList]
  );
  return (
    <ApartmentsContext.Provider value={apartmentsContextValues}>
      {children}
    </ApartmentsContext.Provider>
  );
};
