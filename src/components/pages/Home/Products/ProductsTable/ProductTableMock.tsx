import { ReactElement } from "react";
import { TableRowActionButtons } from "../TableRowActionButtons/TableRowActionButtons";

export interface Product {
  id: string;
  typeOfBenefict: number;
  name: string;
  price: number;
  actionItems: ReactElement;
}

export const productsTable: Product[] = [
  {
    id: "1234567890",
    typeOfBenefict: 1,
    name: "Desayuno americano",
    price: 0,
    actionItems: <TableRowActionButtons />
  },
  {
    id: "1234567890",
    typeOfBenefict: 2,
    name: "Desayuno tropical",
    price: 0,
    actionItems: <TableRowActionButtons />
  },
  {
    id: "1234567890",
    typeOfBenefict: 3,
    name: "Desayuno basico",
    price: 0,
    actionItems: <TableRowActionButtons />
  },
  {
    id: "1234567890",
    typeOfBenefict: 4,
    name: "Almuerzo basico",
    price: 0,
    actionItems: <TableRowActionButtons />
  },
  {
    id: "1234567890",
    typeOfBenefict: 5,
    name: "Almuerzo Vegano",
    price: 0,
    actionItems: <TableRowActionButtons />
  },
  {
    id: "1234567890",
    typeOfBenefict: 5,
    name: "Brunch Completo",
    price: 0,
    actionItems: <TableRowActionButtons />
  },
  {
    id: "1234567890",
    typeOfBenefict: 6,
    name: "Almuerzo completo",
    price: 0,
    actionItems: <TableRowActionButtons />
  },
  {
    id: "1234567890",
    typeOfBenefict: 7,
    name: "Masaje en spa",
    price: 0,
    actionItems: <TableRowActionButtons />
  },
  {
    id: "1234567890",
    typeOfBenefict: 8,
    name: "Cena completa",
    price: 0,
    actionItems: <TableRowActionButtons />
  }
];
