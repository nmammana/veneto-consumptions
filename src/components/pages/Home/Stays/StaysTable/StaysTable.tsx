import MaterialTable from "@material-table/core";
import React from "react";
/* import { FilterList } from "@material-ui/icons"; */
import { tableIcons } from "../../../../../assets/icons/material-icons/MaterialIcons";
import { staysTable, Stay } from "./stayTableMock";
import "./StaysTable.scss";
import { columns } from "./ColumnConfig";
import "../../../../../styles/Global.scss";

export const StaysTable = () => {
  /* const [areFiltersActive, setAreFiltersActive] = useState(false); */

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
      borderBottom: "none"
    },
    headerStyle: {
      borderBottom: "none",
      font: "normal normal 400 20px/27px Poppins",
      color: "#008dc8"
    },
    style: {
      background: "red"
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
      data={staysTable}
      title=""
      options={options}
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
        boxShadow: "none"
      }}
    />
  );
};
