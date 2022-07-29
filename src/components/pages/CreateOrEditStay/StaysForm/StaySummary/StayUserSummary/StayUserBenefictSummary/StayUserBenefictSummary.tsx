import React, { FC } from "react";
import { Benefict } from "../../../../../../../types/types";
import { getBenefictNameFromType } from "../../../../../../../utils/helpers";
import "./StayUserBenefictSummary.scss";

interface StayUserBenefictSummaryProps {
  benefict: Benefict;
}

export const StayUserBenefictSummary: FC<StayUserBenefictSummaryProps> = ({
  benefict
}) => {
  const typeOfBenefict = benefict.type_of_benefit;
  const { quantity } = benefict;
  const benefictName = getBenefictNameFromType(typeOfBenefict);
  return (
    <div className="benefictContainer">
      <p className="benefictName">{benefictName}</p>
      <p className="benefictQuantity">{quantity}</p>
    </div>
  );
};
