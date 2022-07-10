import { Column } from "@material-table/core";
import { ProductTableItem } from "../../../../types/types";

const bodyFontSize = 16;

export const columns: Column<ProductTableItem>[] = [
  {
    title: "Id",
    field: "id",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none"
    }
  },
  {
    title: "Categoría",
    field: "type_of_benefit",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none"
    }
  },
  {
    title: "Producto",
    field: "name",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#2d0836",
      border: "none"
    }
  },
  {
    title: "Precio",
    field: "price",
    filtering: false,
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#817185",
      border: "none"
    }
  }
];
