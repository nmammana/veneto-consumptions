import React, { FC } from "react";
import { DeleteProductButton } from "./DeleteProductButton/DeleteProductButton";
import { EditProductButton } from "./EditProductButton/EditProductButton";
import "./TableRowActionButtons.scss";

export interface TableRowActionButtonsProps {
  itemId: number;
  deleteItem: (itemId: number) => void;
}

export const TableRowActionButtons: FC<TableRowActionButtonsProps> = ({
  itemId,
  deleteItem
}) => {
  return (
    <div className="actionItems">
      <EditProductButton itemId={itemId} />
      <DeleteProductButton
        deleteItem={() => deleteItem(itemId)}
        itemId={itemId}
      />
    </div>
  );
};
