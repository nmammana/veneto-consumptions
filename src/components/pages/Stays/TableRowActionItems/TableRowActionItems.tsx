import React from "react";
import { CurrentAccountPopup } from "./CurrentAccountPopup/CurrentAccountPopup";
import { DeleteStayButton } from "./DeleteStayButton/DeleteStayButton";
import { EditStayButton } from "./EditStayButton/EditStayButton";
import "./TableRowActionItems.scss";

export const TableRowActionItems = () => {
  return (
    <div className="actionItems">
      <CurrentAccountPopup />
      <EditStayButton />
      <DeleteStayButton />
    </div>
  );
};
