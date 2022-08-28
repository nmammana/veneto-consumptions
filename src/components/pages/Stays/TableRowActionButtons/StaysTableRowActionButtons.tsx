import React, { FC } from "react";
import { BenefitsPopup } from "./BenefitsPopup/BenefitsPopup";
import { DeleteStayPopup } from "./DeleteStayPopup/DeleteStayPopup";
import { EditStayButton } from "./EditStayButton/EditStayButton";
import { StayConsumptionsButton } from "./StayConsumptionsButton/StayConsumptionsButton";
import "./StaysTableRowActionButtons.scss";

export interface StaysTableRowActionButtonsProps {
  stayId: number;
  deleteStay: (stayId: number) => void;
}

export const StaysTableRowActionButtons: FC<
  StaysTableRowActionButtonsProps
> = ({ stayId, deleteStay }) => {
  return (
    <div className="actionItems">
      <BenefitsPopup stayId={stayId} />
      <StayConsumptionsButton stayId={stayId} />
      <EditStayButton stayId={stayId} />
      <DeleteStayPopup deleteStay={() => deleteStay(stayId)} stayId={stayId} />
    </div>
  );
};
