import { BenefitName, TypeOfBenefit } from "../types/types";

export const benefitList: BenefitName[] = [
  { name: "Desayuno", typeOfBenefit: TypeOfBenefit.Breakfast },
  { name: "Almuerzo", typeOfBenefit: TypeOfBenefit.Lunch },
  { name: "Merienda", typeOfBenefit: TypeOfBenefit.Snack },
  { name: "Cena", typeOfBenefit: TypeOfBenefit.Dinner },
  { name: "Spa", typeOfBenefit: TypeOfBenefit.Spa },
  { name: "Kiosco", typeOfBenefit: TypeOfBenefit.Store }
];
