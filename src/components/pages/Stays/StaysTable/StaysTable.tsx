import MaterialTable from "@material-table/core";
import React, { useContext, useEffect, useState } from "react";
/* import { FilterList } from "@material-ui/icons"; */
import { tableIcons } from "../../../../assets/icons/material-icons/MaterialIcons";
import "./StaysTable.scss";
import { columns } from "./ColumnConfig";
import { AxiosContext } from "../../../context/AxiosContext";
import {
  Apartment,
  notUndefined,
  Stay,
  StayTableItem
} from "../../../../types/types";
import { StaysContext } from "../../../context/StaysContext";
import { StaysTableRowActionButtons } from "../TableRowActionButtons/StaysTableRowActionButtons";

export const StaysTable = () => {
  /* const [areFiltersActive, setAreFiltersActive] = useState(false); */

  const { authAxios } = useContext(AxiosContext);
  const staysContext = useContext(StaysContext);
  const [stayTableList, setStayTableList] = useState<StayTableItem[]>([]);
  /* const [isLoadingStayItem, setIsLoadingStayItem] = useState<boolean>(false); */

  const deleteStay = async (stayId: number) => {
    try {
      await authAxios.delete(`/stay/${stayId}/`);
      const updatedStays = staysContext?.stayList.filter(
        stay => stay.id !== stayId
      );
      if (updatedStays) staysContext?.setStayList(updatedStays);
    } catch (error) {
      console.error("ERROR: ", error);
    }
  };

  const getApartmentById = async (apartmentId: number): Promise<Apartment> => {
    const apartmentResponse = await authAxios.get(
      `/apartments/${apartmentId}/`
    );
    return apartmentResponse.data;
  };

  const formatStayList = async (stays?: Stay[]): Promise<StayTableItem[]> => {
    if (!stays) return [];
    const tableStayList = await Promise.all(
      stays.map(async stay => {
        if (!stay.apartment || !stay.id) return undefined;
        const apartment = await getApartmentById(stay.apartment);
        return {
          id: stay.id,
          startDate: stay.start_date,
          endDate: stay.end_date,
          apartmentName: apartment.name,
          guestsNumber: stay.users?.length
        };
      })
    );
    return tableStayList.filter(notUndefined);
  };

  useEffect(() => {
    const createStayTableList = async () => {
      const formattedStayList = await formatStayList(staysContext?.stayList);
      setStayTableList(formattedStayList);
    };
    createStayTableList();
  }, [staysContext]);

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
    actionsCellStyle: {
      border: "none"
    },
    headerStyle: {
      border: "none",
      font: "normal normal 400 20px/27px Poppins",
      color: "#008dc8"
    },
    filtering: true,
    actionsColumnIndex: -1
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
      data={stayTableList}
      title=""
      options={options}
      isLoading={staysContext?.isLoadingStayList}
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
            <StaysTableRowActionButtons
              stayId={data.id}
              deleteStay={() => {
                deleteStay(data.id);
              }}
            />
          );
        }
      }}
      style={{
        boxShadow: "none",
        border: "none"
      }}
    />
  );
};
