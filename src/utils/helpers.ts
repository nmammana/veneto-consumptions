import { benefictList } from "../models/beneficts";
import { notUndefined, TypeOfBenefict } from "../types/types";

export const getFullNameFromPerson = (
  firstName?: string,
  lastName?: string
): string => {
  return [firstName, lastName].filter(notUndefined).join(" ");
};

export const getBenefictNameFromType = (
  typeOfBenefict: TypeOfBenefict
): string => {
  return (
    benefictList.find(benefict => typeOfBenefict === benefict.typeOfBenefict)
      ?.name ?? ""
  );
};
