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
import { Item } from "../../types/types";
import { AuthContext } from "./AuthContext";
import { AxiosContext } from "./AxiosContext";

interface ProductsContextProps {
  productList: Item[];
  setProductList: Dispatch<SetStateAction<Item[]>>;
  isLoadingProductList: boolean;
}

interface ProductsContextProviderProps {
  children: ReactNode;
}

export const ProductsContext = createContext<ProductsContextProps>(
  undefined as any
);

export const ProductsContextProvider: FC<ProductsContextProviderProps> = ({
  children
}) => {
  const { authAxios } = useContext(AxiosContext);
  const { authState } = useContext(AuthContext);
  const { authenticated } = authState;
  const [productList, setProductList] = useState<Item[]>([]);
  const [isLoadingProductList, setIsLoadingProductList] =
    useState<boolean>(false);

  useEffect(() => {
    if (authenticated) {
      const getItemsList = async (): Promise<Item[]> => {
        const itemsListResponse = await authAxios.get("/items");
        return itemsListResponse.data.results;
      };
      const fetchStayList = async () => {
        setIsLoadingProductList(true);
        const products = await getItemsList();
        setProductList(products);
        setIsLoadingProductList(false);
      };
      fetchStayList();
    }
  }, [authAxios, authenticated]);

  const productsContextValues = useMemo(
    () => ({
      productList,
      setProductList,
      isLoadingProductList
    }),
    [productList, isLoadingProductList]
  );
  return (
    <ProductsContext.Provider value={productsContextValues}>
      {children}
    </ProductsContext.Provider>
  );
};
