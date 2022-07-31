import { Optional, StayInputs } from "../../../../types/types";

export const validateUserAddition = (
  formValues: StayInputs
): Optional<string> => {
  const { startDate, endDate, apartment, firstName, lastName, email, qrCode } =
    formValues;
  /* const startDateTime = DateTime.fromFormat(startDate ?? "", "dd/MM/yyyy");
  const endDateTime = DateTime.fromFormat(endDate ?? "", "dd/MM/yyyy");
  console.log("startDateTime", startDateTime);
  console.log("endDateTime", endDateTime); */
  if (!startDate) {
    return "Error: No hay fecha de inicio de estadía seleccionada.";
  }
  if (!endDate) {
    return "Error: No hay fecha de finalización de estadía seleccionada.";
  }
  if (!apartment) {
    return "Error: No hay departamento seleccionado.";
  }
  if (!firstName) {
    return "Error: Ingrese el nombre del nuevo huésped.";
  }
  if (!lastName) {
    return "Error: Ingrese el apellido del nuevo huésped.";
  }
  if (!email) {
    return "Error: Ingrese el email del nuevo huésped.";
  }
  if (!qrCode) {
    return "Error: Ingrese el código QR del nuevo huésped.";
  }
  /* if (dateIsAfter(startDateTime, endDateTime)) {
    return "Error: La fecha de entrada no puede ser posterior a la de salida.";
  } */
  return undefined;
};
