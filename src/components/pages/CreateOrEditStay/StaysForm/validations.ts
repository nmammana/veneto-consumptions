import { head, isEmpty } from "lodash";
import {
  Benefit,
  notUndefined,
  Optional,
  StayInputs,
  User
} from "../../../../types/types";
import {
  convertDateStringToDateTime,
  dateIsBefore,
  isEmail
} from "../../../../utils/helpers";

export const validateUserAddition = (
  formValues: StayInputs,
  benefits?: Benefit[],
  userEdited?: User
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
  const negativeBenefitError = benefits
    ?.map(benefit => {
      if (benefit.quantity < 0)
        return "Error: escriba una cantidad mayor o igual a 0 para el beneficio que desea otorgar";
      return undefined;
    })
    .filter(notUndefined);
  if (!isEmpty(negativeBenefitError)) return head(negativeBenefitError);

  const userEffectiveBenefits = userEdited?.benefits;
  const quantityIsLessThanConsumptionMadeError = userEffectiveBenefits
    ?.map(userBenefit => {
      const matchedFieldBenefit = benefits?.find(
        fieldBenefit =>
          fieldBenefit.type_of_benefit === userBenefit.type_of_benefit
      );
      const userBenefitQuantity = userBenefit.quantity;
      const userBenefitQuantityAvailable = userBenefit?.quantity_available ?? 0;
      const alreadyUsedBenefitsQuantity =
        userBenefitQuantity - userBenefitQuantityAvailable;
      if (
        matchedFieldBenefit?.quantity &&
        matchedFieldBenefit?.quantity < alreadyUsedBenefitsQuantity
      ) {
        return "Error: La cantidad de beneficios otorgados no puede ser menor a los que ya se consumieron";
      }
      return undefined;
    })
    .filter(notUndefined);
  if (!isEmpty(quantityIsLessThanConsumptionMadeError))
    return head(quantityIsLessThanConsumptionMadeError);

  return undefined;
};

export const validateStayCreationEdition = (
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
