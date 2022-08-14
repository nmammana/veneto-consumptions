import { head, isEmpty } from "lodash";
import {
  Benefict,
  notUndefined,
  Optional,
  StayInputs
} from "../../../../types/types";
import {
  convertDateStringToDateTime,
  dateIsBefore,
  isEmail
} from "../../../../utils/helpers";

export const validateUserAddition = (
  formValues: StayInputs,
  beneficts?: Benefict[]
): Optional<string> => {
  const {
    startDate,
    endDate,
    apartment,
    firstName,
    lastName,
    email,
    identityNumber,
    qrCode
  } = formValues;
  if (!startDate) {
    return "Error: No hay fecha de inicio de estadía seleccionada.";
  }
  if (!endDate) {
    return "Error: No hay fecha de finalización de estadía seleccionada.";
  }
  if (!apartment) {
    return "Error: Elija un departamento.";
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
  if (!email) {
    return "Error: Ingrese el email del nuevo huésped.";
  }
  if (!identityNumber) {
    return "Error: Ingrese el documento del nuevo huésped.";
  }
  if (!/^[0-9a-zA-Z]+$/.test(identityNumber)) {
    return "Error: Documento inválido";
  }
  if (!qrCode) {
    return "Error: Ingrese el código QR del nuevo huésped.";
  }
  if (qrCode.length !== 6) {
    return "Error: Escriba un código QR válido.";
  }
  if (
    !dateIsBefore(
      convertDateStringToDateTime(startDate),
      convertDateStringToDateTime(endDate)
    )
  ) {
    return "Error: La fecha de entrada no puede ser igual o posterior a la de salida ";
  }
  if (!isEmail(email)) {
    return "Escriba una direccion válida de correo electrónico";
  }
  const negativeBenefictError = beneficts
    ?.map(benefict => {
      if (benefict.quantity < 0)
        return "Error: escriba una cantidad mayor o igual a 0 para el beneficio que desea otorgar";
      return undefined;
    })
    .filter(notUndefined);
  if (!isEmpty(negativeBenefictError)) return head(negativeBenefictError);

  return undefined;
};

export const validateStayCreation = (
  formValues: StayInputs
): Optional<string> => {
  const { startDate, endDate, apartment } = formValues;
  if (!startDate) {
    return "Error: No hay fecha de inicio de estadía seleccionada.";
  }
  if (!endDate) {
    return "Error: No hay fecha de finalización de estadía seleccionada.";
  }
  if (!apartment) {
    return "Error: Elija un departamento.";
  }
  if (
    !dateIsBefore(
      convertDateStringToDateTime(startDate),
      convertDateStringToDateTime(endDate)
    )
  ) {
    return "Error: La fecha de entrada no puede ser igual o posterior a la de salida ";
  }
  return undefined;
};
