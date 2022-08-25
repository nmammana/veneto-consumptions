import { Item } from "../../../../types/types";

export const validateItemCreationEdition = (values: Item) => {
  const { name, price } = values;
  const typeOfBenefit = values.type_of_benefit;
  if (!name) {
    return "Error: Ingrese un nombre para el nuevo producto.";
  }
  if (!price) {
    return "Error: Ingrese un precio para el nuevo producto.";
  }
  if (!typeOfBenefit) {
    return "Error: Falta asignarle una categoría al nuevo producto.";
  }
  if (price < 0) {
    return "Error: Ingrese un precio mayor o igual a 0 para el producto.";
  }
  return undefined;
};
