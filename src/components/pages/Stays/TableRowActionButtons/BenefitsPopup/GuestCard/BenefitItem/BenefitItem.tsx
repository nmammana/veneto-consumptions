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
  return (
    <div className="benefitItem">
      <p className="benefitName">{benefitName}:</p>
      <p className="quantity">
        Total: <span className="value">{quantity}</span>
      </p>
      <p className="quantityAvailable">
        Restante: <span className="value">{quantityAvailable}</span>
      </p>
    </div>
  );
};
