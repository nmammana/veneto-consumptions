import React, { FC } from "react";
import { Benefit } from "../../../../../../../types/types";
import { getBenefitNameFromType } from "../../../../../../../utils/helpers";
import "./StayUserBenefitSummary.scss";

interface StayUserBenefitSummaryProps {
  benefit: Benefit;
}

export const StayUserBenefitSummary: FC<StayUserBenefitSummaryProps> = ({
  benefit
}) => {
  const typeOfBenefit = benefit.type_of_benefit;
  const { quantity } = benefit;
  const quantityAvailable = benefit.quantity_available;
  const benefitName = getBenefitNameFromType(typeOfBenefit);
  return (
    <div className="benefitContainer">
      <div className="benefitTotalContainer">
        <p className="benefitName">{benefitName}</p>
        <p className="benefitQuantity">{quantity}</p>
      </div>
      <p className="quantityAvailable">{quantityAvailable} disponibles</p>
    </div>
  );
};
