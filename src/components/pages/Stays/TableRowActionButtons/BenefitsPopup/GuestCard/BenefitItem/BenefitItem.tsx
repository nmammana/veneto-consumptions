import React, { FC } from "react";
import { benefitList } from "../../../../../../../models/benefits";
import { Benefit } from "../../../../../../../types/types";
import "./BenefitItem.scss";

interface BenefitItemProps {
  benefit: Benefit;
}

export const BenefitItem: FC<BenefitItemProps> = ({ benefit }) => {
  const typeOfBenefit = benefit.type_of_benefit;
  const quantityAvailable = benefit.quantity_available;
  const { quantity } = benefit;
  const benefitName = benefitList.find(
    benefitItem => benefitItem.typeOfBenefit === typeOfBenefit
  )?.name;
  const benefitData = benefitName
    ? `${benefitName} : Cant. total: ${quantity} | Cant. restante: ${quantityAvailable}`
    : "-";
  return <p className="benefitItem">{benefitData}</p>;
};
