import { Column } from "@material-table/core";
import { Product } from "./ProductTableMock";

const bodyFontSize = 16;

export const columns: Column<Product>[] = [
  {
    title: "Id",
    field: "typeOfBenefict",
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
      color: "#817185",
      border: "none"
    }
  },
  {
    title: "Precio",
    field: "price",
    cellStyle: {
      font: `normal normal 400 ${bodyFontSize}px/22px Poppins`,
      color: "#2d0836",
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
