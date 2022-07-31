import React, { FC } from "react";
import { BenefictsPopup } from "./BenefictsPopup/BenefictsPopup";
import { CurrentAccountPopup } from "./CurrentAccountPopup/CurrentAccountPopup";
import { DeleteStayButton } from "./DeleteStayButton/DeleteStayButton";
import { EditStayButton } from "./EditStayButton/EditStayButton";
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
      <BenefictsPopup stayId={stayId} />
      <CurrentAccountPopup />
      <EditStayButton stayId={stayId} />
      <DeleteStayButton deleteStay={() => deleteStay(stayId)} stayId={stayId} />
    </div>
  );
};
