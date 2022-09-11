import { Column } from "@material-table/core";

const bodyFontSize = 16;

export interface StayTableItem {
  id: number;
  apartmentName?: string;
  startDate?: string;
  endDate?: string;
  guestsNumber?: number;
}

export const columns: Column<StayTableItem>[] = [
  {
    title: "Estadía n°",
    field: "id",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "10%"
    },
    sorting: true,
    defaultSort: "desc"
  },
  {
    title: "Depto",
    field: "apartmentName",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#2d0836",
      border: "none",
      width: "30%"
    },
    sorting: false
  },
  {
    title: "Desde",
    field: "startDate",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "15%"
    },
    sorting: false
  },
  {
    title: "Hasta",
    field: "endDate",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "15%"
    },
    sorting: false
  }
];
