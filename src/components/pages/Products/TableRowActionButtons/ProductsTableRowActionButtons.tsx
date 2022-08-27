import React, { FC } from "react";
import { DeleteProductPopup } from "./DeleteProductPopup/DeleteProductPopup";
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
      <DeleteProductPopup
        deleteItem={() => deleteItem(itemId)}
        itemId={itemId}
      />
    </div>
  );
};
