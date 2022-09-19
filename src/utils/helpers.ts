import { DateTime } from "luxon";
import { benefitList } from "../models/benefits";
import { notUndefined, Optional, TypeOfBenefit } from "../types/types";

export const getFullNameFromPerson = (
  firstName?: string,
  lastName?: string
): string => {
  return [firstName, lastName].filter(notUndefined).join(" ");
};

export const getBenefitNameFromType = (
  typeOfBenefit: TypeOfBenefit
): string => {
  return (
    benefitList.find(benefit => typeOfBenefit === benefit.typeOfBenefit)
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

export const isEmail = (stringToTest: string): boolean => {
  const emailRegex =
    /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  return emailRegex.test(stringToTest);
};

export const roundNumberToSecondDecimal = (
  value?: number
): Optional<number> => {
  return value && Math.round((value + Number.EPSILON) * 100) / 100;
};

export const getMapValueBuilder =
  <K extends string, V>(map: Record<K, V>) =>
  (key: K): V =>
    map[key];
