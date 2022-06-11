import {
  createContext,
  Dispatch,
  FC,
  ReactNode,
  SetStateAction,
  useMemo,
  useState
} from "react";
import { TableType } from "../../types/types";

interface AdminPageContextProps {
  tableType: TableType;
  setTableType: Dispatch<SetStateAction<TableType>>;
}

interface AdminPageContextProviderProps {
  children: ReactNode;
}

export const AdminPageContext = createContext<
  AdminPageContextProps | undefined
>(undefined);

export const AdminPageContextProvider: FC<AdminPageContextProviderProps> = ({
  children
}) => {
  const [tableType, setTableType] = useState<TableType>(TableType.Stays);

  const adminPageContextValues = useMemo(
    () => ({
      tableType,
      setTableType
    }),
    [tableType]
  );
  return (
    <AdminPageContext.Provider value={adminPageContextValues}>
      {children}
    </AdminPageContext.Provider>
  );
};
