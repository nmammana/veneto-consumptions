import { Column } from "@material-table/core";
import { Stay } from "./stayTableMock";

const bodyFontSize = 16;

export const columns: Column<Stay>[] = [
  {
    title: "Estadía",
    field: "id",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none"
    }
  },
  {
    title: "Depto",
    field: "appartment",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#2d0836",
      border: "none"
    }
  },
  {
    title: "Desde",
    field: "startDate",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none"
    }
  },
  {
    title: "Hasta",
    field: "endDate",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none"
    }
  },
  {
    title: "Huespedes",
    field: "guestsNumber",
    filtering: false,
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none"
    }
  },
  {
    title: "Beneficios",
    field: "beneficts",
    filtering: false,
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none"
    }
  },
  {
    title: "",
    field: "actionItems",
    filtering: false,
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none"
    }
  }
];
