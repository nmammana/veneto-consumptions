import { DateTime } from "luxon";
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

export const convertDateStringToDateTime = (dateStr: string): DateTime => {
  return DateTime.fromISO(dateStr, { setZone: false });
};

export const dateIsAfter = (date: DateTime, comparand: DateTime): boolean => {
  return date.toMillis() > comparand.toMillis();
};

export const dateIsBefore = (date: DateTime, comparand: DateTime): boolean => {
  return date.toMillis() < comparand.toMillis();
};
