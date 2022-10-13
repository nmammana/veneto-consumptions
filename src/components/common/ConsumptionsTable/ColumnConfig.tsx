import { Column } from "@material-table/core";
import { Tooltip, Typography } from "@material-ui/core";
import { ConsumptionTableItem } from "../../../types/types";
import { Tag } from "../tag/Tag/Tag";
import "./ColumnConfig.scss";

const bodyFontSize = 14;

export const columns: Column<ConsumptionTableItem>[] = [
  {
    title: "Fecha",
    field: "date",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "20%",
      padding: "4px"
    }
  },
  {
    title: "Nombre",
    field: "userName",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#2d0836",
      border: "none",
      width: "15%",
      padding: "4px"
    }
  },
  {
    title: "Departamento",
    field: "apartmentName",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "20%",
      padding: "4px"
    }
  },
  {
    title: "Consumos",
    field: "itemConsumptionList",
    render: item => (
      <Tooltip
        title={
          <Typography style={{ fontSize: 14 }}>
            {item.itemConsumptionList.join(", ")}
          </Typography>
        }
      >
        <div className="consumptionListContainer">
          <p className="itemConsumptionList">
            {item.itemConsumptionList.join(", ")}
          </p>
        </div>
      </Tooltip>
    ),
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "20%",
      padding: "4px"
    }
  },
  {
    title: "Otros",
    field: "extraPrice",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "5%",
      padding: "4px"
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
      width: "7%",
      padding: "4px"
    }
  },
  {
    title: "",
    field: "payed",
    render: item => (
      <Tag
        text={item.payed ? "Pagado" : "No Pagado"}
        title={item.payed ? "Pagado" : "No Pagado"}
        color={item.payed ? "#00b745" : "#ffab04"}
      />
    ),
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "7%",
      padding: "4px"
    }
  },
  {
    title: "Total",
    field: "consumptionTotal",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none",
      width: "6%",
      padding: "4px"
    }
  }
];
