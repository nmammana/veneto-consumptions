import { Column } from "@material-table/core";
import { ProductTableItem } from "../../../../types/types";

const bodyFontSize = 14;

export const columns: Column<ProductTableItem>[] = [
  {
    title: "Producto n°",
    field: "id",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none"
    },
    sorting: true,
    defaultSort: "desc"
  },
  {
    title: "Categoría",
    field: "type_of_benefit",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none"
    },
    sorting: false
  },
  {
    title: "Producto",
    field: "name",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#2d0836",
      border: "none"
    },
    sorting: false
  },
  {
    title: "Precio",
    field: "price",
    filtering: false,
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none"
    },
    sorting: false
  }
];
