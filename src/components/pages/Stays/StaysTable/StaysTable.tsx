import MaterialTable from "@material-table/core";
import React, { useContext, useEffect, useState } from "react";
import { tableIcons } from "../../../../assets/icons/material-icons/MaterialIcons";
import "./StaysTable.scss";
import { columns, StayTableItem } from "./ColumnConfig";
import { AxiosContext } from "../../../context/AxiosContext";
import { notUndefined, Stay } from "../../../../types/types";
import { StaysContext } from "../../../context/StaysContext";
import { StaysTableRowActionButtons } from "../TableRowActionButtons/StaysTableRowActionButtons";
import { ApartmentsContext } from "../../../context/ApartmentsContext";

export const StaysTable = () => {
  const { authAxios } = useContext(AxiosContext);
  const apartmentsContext = useContext(ApartmentsContext);
  const staysContext = useContext(StaysContext);
  const [stayTableList, setStayTableList] = useState<StayTableItem[]>([]);

  const deleteStay = async (stayId: number) => {
    try {
      await authAxios.delete(`/stay/${stayId}/`);
      const updatedStays = staysContext?.stayList.filter(
        stay => stay.id !== stayId
      );
      if (updatedStays) staysContext?.setStayList(updatedStays);
    } catch (error) {
      /* console.error("ERROR: ", error); */
    }
  };

  useEffect(() => {
    const formatStayList = (stays?: Stay[]): StayTableItem[] => {
      if (!stays) return [];
      const tableStayList = stays.map(stay => {
        if (!stay.apartment || !stay.id) return undefined;
        const apartment = apartmentsContext?.apartmentList.find(
          apartmentItem => apartmentItem.id === stay.apartment
        );
        return {
          id: stay.id,
          startDate: stay.start_date,
          endDate: stay.end_date,
          apartmentName: apartment?.name,
          guestsNumber: stay.users?.length
        };
      });

      return tableStayList.filter(notUndefined);
    };

    const formattedStayList = formatStayList(staysContext?.stayList);
    setStayTableList(formattedStayList);
  }, [staysContext, apartmentsContext?.apartmentList]);

  const options = {
    paging: true,
    pageSize: 10,
    emptyRowsWhenPaging: false,
    pageSizeOptions: [10, 20, 50],
    search: false,
    showTitle: false,
    toolbar: false,
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
    filterCellStyle: {
      border: "none"
    },
    filtering: false,
    actionsColumnIndex: -1
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
          },
          emptyDataSourceMessage:
            "No hay estadías para la búsqueda seleccionada"
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
