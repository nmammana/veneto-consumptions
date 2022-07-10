import MaterialTable from "@material-table/core";
import React, { useContext, useEffect, useState } from "react";
/* import { FilterList } from "@material-ui/icons"; */
import { tableIcons } from "../../../../assets/icons/material-icons/MaterialIcons";
import "./StaysTable.scss";
import { columns } from "./ColumnConfig";
import { AxiosContext } from "../../../context/AxiosContext";
import { Apartment, Stay, StayTableItem } from "../../../../types/types";

export const StaysTable = () => {
  /* const [areFiltersActive, setAreFiltersActive] = useState(false); */

  const { authAxios } = useContext(AxiosContext);
  const [stayList, setStayList] = useState<StayTableItem[]>([]);
  const [isLoadingStayItem, setIsLoadingStayItem] = useState<boolean>(false);

  const getStayList = async (): Promise<Stay[]> => {
    const stayListResponse = await authAxios.get("/stay");
    return stayListResponse.data.results;
  };

  const getApartmentById = async (apartmentId: number): Promise<Apartment> => {
    const apartmentResponse = await authAxios.get(
      `/apartments/${apartmentId}/`
    );
    return apartmentResponse;
  };

  const formatStayList = async (stays: Stay[]): Promise<StayTableItem[]> => {
    const tableStayList: StayTableItem[] = await Promise.all(
      stays.map(async stay => {
        const apartment = await getApartmentById(stay.id);
        return {
          id: stay.id,
          apartmentName: apartment.name,
          startDate: stay.startDate,
          endDate: stay.endDate,
          guestsNumber: stay.users.length
        };
      })
    );
    return tableStayList;
  };

  useEffect(() => {
    const fetchStayList = async () => {
      setIsLoadingStayItem(true);
      const stays = await getStayList();
      const formattedStayList = await formatStayList(stays);
      setStayList(formattedStayList);
      setIsLoadingStayItem(false);
    };
    fetchStayList();
  }, []);

  useEffect(() => {
    console.log("stayList", stayList);
  }, [stayList]);

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
    rowStyle: (data: Stay, index: number) => {
      if (index % 2 === 0) {
        return { backgroundColor: "#F9F8F9" };
      }
      return { backgroundColor: "#FFFFFF" };
    },
    cellStyle: {
      border: "none"
    },
    headerStyle: {
      border: "none",
      font: "normal normal 400 20px/27px Poppins",
      color: "#008dc8"
    },
    filtering: true
    /* headerStyle: {
      position: "sticky",
      top: "0",
      borderRadius: "10px",
      height: "10px"
    }, */
  };

  return (
    <MaterialTable
      columns={columns}
      icons={tableIcons}
      data={stayList}
      title=""
      options={options}
      isLoading={isLoadingStayItem}
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
          }
        }
      }}
      /* style={{
        borderRadius: "10px",
        display: "grid",
        height: "100vh",
        gridTemplateRows: "auto 54px"
      }} */
      /* actions={[
        {
          icon: FilterList,
          tooltip: "Filtros de búsqueda",
          isFreeAction: true,
          onClick: () => {
            setAreFiltersActive(!areFiltersActive);
          }
        }
      ]} */
      style={{
        boxShadow: "none",
        border: "none"
      }}
    />
  );
};
