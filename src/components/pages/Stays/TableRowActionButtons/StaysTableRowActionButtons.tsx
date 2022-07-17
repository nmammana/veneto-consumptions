import React, { FC } from "react";
import { BenefictsPopup } from "./BenefictsPopup/BenefictsPopup";
import { CurrentAccountPopup } from "./CurrentAccountPopup/CurrentAccountPopup";
import { DeleteStayButton } from "./DeleteStayButton/DeleteStayButton";
import { EditStayButton } from "./EditStayButton/EditStayButton";
import "./StaysTableRowActionButtons.scss";

export interface StaysTableRowActionButtonsProps {
  itemId: number;
  deleteItem: (itemId: number) => void;
}

export const StaysTableRowActionButtons: FC<
  StaysTableRowActionButtonsProps
> = ({ itemId, deleteItem }) => {
  return (
    <div className="actionItems">
      <BenefictsPopup />
      <CurrentAccountPopup />
      <EditStayButton itemId={itemId} />
      <DeleteStayButton deleteItem={() => deleteItem(itemId)} itemId={itemId} />
    </div>
  );
};
