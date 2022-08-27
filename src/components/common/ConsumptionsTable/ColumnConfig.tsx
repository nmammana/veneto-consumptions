import { Column } from "@material-table/core";
import { ConsumptionTableItem } from "../../../types/types";
import { PayingTag } from "../tag/PayingTag/PayingTag";

const bodyFontSize = 16;

export const columns: Column<ConsumptionTableItem>[] = [
  {
    title: "Fecha",
    field: "date",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "20%"
    }
  },
  {
    title: "Nombre",
    field: "userName",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#2d0836",
      border: "none",
      width: "20%"
    }
  },
  {
    title: "Consumos",
    field: "itemConsumptionList",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "25%"
    }
  },
  {
    title: "Otros",
    field: "extraPrice",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "5%"
    }
  },
  {
    title: "Firma",
    field: "signature",
    render: item => (
      <a href={item.signature} target="_blank" rel="noopener noreferrer">
        <img src={item.signature} alt="firma" height="50" width="100" />
      </a>
    ),
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "10%"
    }
  },
  {
    title: "",
    field: "payed",
    render: item => <PayingTag payed={item.payed} />,
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "10%"
    }
  },
  {
    title: "Total",
    field: "consumptionTotal",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "10%"
    }
  }
];
