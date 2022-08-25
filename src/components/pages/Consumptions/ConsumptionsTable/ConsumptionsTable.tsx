import MaterialTable from "@material-table/core";
import React, { FC, useEffect, useRef, useState } from "react";
import { isEmpty } from "lodash";
import { tableIcons } from "../../../../assets/icons/material-icons/MaterialIcons";
import "./ConsumptionsTable.scss";
import { columns } from "./ColumnConfig";
import {
  Consumption,
  ConsumptionTableItem,
  Stay
} from "../../../../types/types";
import { formatConsumptionList } from "./utils";

interface ConsumptionsTableProps {
  consumptionList?: Consumption[];
  isLoadingConsumptions: boolean;
  setConsumptionIdsSelected?: (consumptionIdsSelected: number[]) => void;
  isDinamicTable?: boolean;
}

export const ConsumptionsTable: FC<ConsumptionsTableProps> = ({
  consumptionList,
  isLoadingConsumptions,
  setConsumptionIdsSelected,
  isDinamicTable = false
}) => {
  const [consumptionTableItemList, setConsumptionTableItemList] =
    useState<ConsumptionTableItem[]>();
  const tableRef = useRef<HTMLTableElement>(null);

  useEffect(() => {
    if (consumptionList && !isEmpty(consumptionList)) {
      setConsumptionTableItemList(formatConsumptionList(consumptionList));
    }
  }, [consumptionList]);

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
    selection: isDinamicTable,
    showSelectAllCheckbox: false,
    selectionProps: (rowData: ConsumptionTableItem) => {
      const checked = rowData.payed ? { checked: false } : {};
      return { disabled: rowData.payed, ...checked };
    },
    cellStyle: {
      border: "none",
      maxHeigth: "40px",
      maxWidth: "150px"
    },
    actionsCellStyle: {
      border: "none"
    },
    headerStyle: {
      border: "none",
      font: "normal normal 400 20px/27px Poppins",
      color: "#008dc8",
      height: 20,
      maxHeight: 20
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
      data={consumptionTableItemList ?? []}
      title=""
      options={options}
      isLoading={isLoadingConsumptions}
      tableRef={tableRef}
      localization={{
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
            "No hay consumos para la búsqueda seleccionada"
        },
        header: {
          actions: ""
        }
      }}
      onSelectionChange={rows => {
        if (setConsumptionIdsSelected) {
          setConsumptionIdsSelected(rows.map(row => row.id));
        }
      }}
      actions={[
        {
          icon: "",
          tooltip: "",
          onClick: () => {}
        }
      ]}
      style={{
        boxShadow: "none",
        border: "none"
      }}
    />
  );
};
