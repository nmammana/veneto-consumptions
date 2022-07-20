import MaterialTable from "@material-table/core";
import React, { useContext, useEffect, useState } from "react";
/* import { FilterList } from "@material-ui/icons"; */
import { ToastContainer } from "react-toastify";
import { tableIcons } from "../../../../assets/icons/material-icons/MaterialIcons";
import "./ProductsTable.scss";
import { columns } from "./ColumnConfig";
import {
  BenefictName,
  Item,
  ProductTableItem,
  TypeOfBenefict
} from "../../../../types/types";
import { AxiosContext } from "../../../context/AxiosContext";
import { ProductsContext } from "../../../context/ProductsContext";
import { ProductsTableRowActionButtons } from "../TableRowActionButtons/ProductsTableRowActionButtons";

export const ProductsTable = () => {
  /* const [areFiltersActive, setAreFiltersActive] = useState(false); */
  const { authAxios } = useContext(AxiosContext);
  const productsContext = useContext(ProductsContext);
  const [itemTableList, setItemTableList] = useState<ProductTableItem[]>([]);

  /* const [isLoadingItems, setIsLoadingItems] = useState<boolean>(false); */

  const beneficts: BenefictName[] = [
    { name: "Desayuno", typeOfBenefict: TypeOfBenefict.Breakfast },
    { name: "Almuerzo", typeOfBenefict: TypeOfBenefict.Lunch },
    { name: "Merienda", typeOfBenefict: TypeOfBenefict.Snack },
    { name: "Cena", typeOfBenefict: TypeOfBenefict.Dinner },
    { name: "Spa", typeOfBenefict: TypeOfBenefict.Spa },
    { name: "Kiosco", typeOfBenefict: TypeOfBenefict.Store }
  ];

  const deleteItem = async (itemId: number) => {
    try {
      await authAxios.delete(`/items/${itemId}/`);
      const updatedItems = productsContext?.productList.filter(
        item => item.id !== itemId
      );
      if (updatedItems) productsContext?.setProductList(updatedItems);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  const formatItemList = (items?: Item[]): ProductTableItem[] => {
    if (!items) return [];
    const tableItemsList: ProductTableItem[] = items.map(item => ({
      ...item,
      type_of_benefit:
        beneficts.find(
          benefict => benefict.typeOfBenefict === item.type_of_benefit
        )?.name ?? ""
    }));
    return tableItemsList;
  };

  useEffect(() => {
    const createItemTableList = () => {
      const formattedItemList = formatItemList(productsContext?.productList);
      setItemTableList(formattedItemList);
    };
    createItemTableList();
  }, [productsContext]);

  const options = {
    paging: true,
    pageSize: 10,
    emptyRowsWhenPaging: false,
    pageSizeOptions: [10, 20, 50],
    search: false,
    showTitle: false,
    toolbar: true,
    /* sorting: true, */
    sorting: false,
    rowStyle: (data: Item, index: number) => {
      if (index % 2 === 0) {
        return { backgroundColor: "#F9F8F9" };
      }
      return { backgroundColor: "#FFFFFF" };
    },
    cellStyle: {
      border: "none"
    },
    actionsCellStyle: {
      border: "none"
    },
    headerStyle: {
      border: "none",
      font: "normal normal 400 20px/27px Poppins",
      color: "#008dc8"
    },
    filtering: true,
    /* headerStyle: {
      position: "sticky",
      top: "0",
      borderRadius: "10px",
      height: "10px"
    }, */
    actionsColumnIndex: -1
  };

  return (
    <>
      <MaterialTable
        columns={columns}
        icons={tableIcons}
        data={itemTableList}
        title=""
        options={options}
        isLoading={productsContext?.isLoadingProductList}
        localization={{
          toolbar: {
            searchPlaceholder: "Buscar por nombre o DNI...",
            searchTooltip: "Búsqueda por nombre o DNI"
          },
          pagination: {
            labelRowsSelect: "Filas",
            firstTooltip: "Primera página",
            previousTooltip: "Anterior",
            nextTooltip: "Siguiente",
            lastTooltip: "Última página",
            labelDisplayedRows: ""
          },
          body: {
            filterRow: {
              filterTooltip: "Filtrar"
            },
            emptyDataSourceMessage: "Aún no hay productos cargados"
          },
          header: {
            actions: ""
          }
        }}
        actions={[
          {
            icon: "",
            tooltip: "",
            onClick: () => {}
          }
        ]}
        components={{
          // eslint-disable-next-line react/no-unstable-nested-components
          Action: (props: any) => {
            const { data } = props;
            return (
              <ProductsTableRowActionButtons
                itemId={data.id}
                deleteItem={() => deleteItem(data.id)}
              />
            );
          }
        }}
        style={{
          boxShadow: "none",
          border: "none"
        }}
      />
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
    </>
  );
};
