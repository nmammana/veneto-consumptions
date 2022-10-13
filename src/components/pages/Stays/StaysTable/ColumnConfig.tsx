import { Column } from "@material-table/core";
import { Tag } from "../../../common/tag/Tag/Tag";

const bodyFontSize = 14;

export interface StayTableItem {
  id: number;
  apartmentName?: string;
  startDate?: string;
  endDate?: string;
  payed?: boolean;
  has_consumption?: boolean;
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
    title: "Ingreso",
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
    title: "Salida",
    field: "endDate",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "15%"
    },
    sorting: false
  },
  {
    title: "",
    field: "payed",
    render: stay => {
      const label = !stay.has_consumption
        ? "Sin consumos"
        : stay.payed
        ? "Pagado"
        : "No Pagado";
      const color = !stay.has_consumption
        ? "#bcb0be"
        : stay.payed
        ? "#00b745"
        : "#ffab04";
      return <Tag text={label} title={label} color={color} />;
    },

    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "10%"
    }
  }
];
