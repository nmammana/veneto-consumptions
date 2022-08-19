import React, { FC } from "react";
import { DeleteProductButton } from "./DeleteProductButton/DeleteProductButton";
import { EditProductPopup } from "./EditProductPopup/EditProductPopup";
import "./ProductsTableRowActionButtons.scss";

export interface ProductsTableRowActionButtonsProps {
  itemId: number;
  deleteItem: (itemId: number) => void;
}

export const ProductsTableRowActionButtons: FC<
  ProductsTableRowActionButtonsProps
> = ({ itemId, deleteItem }) => {
  return (
    <div className="actionItems">
      <EditProductPopup itemId={itemId} />
      <DeleteProductButton
        deleteItem={() => deleteItem(itemId)}
        itemId={itemId}
      />
    </div>
  );
};
