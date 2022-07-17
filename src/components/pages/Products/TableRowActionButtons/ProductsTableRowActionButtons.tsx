import React, { FC } from "react";
import { DeleteProductButton } from "./DeleteProductButton/DeleteProductButton";
import { EditProductButton } from "./EditProductButton/EditProductButton";
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
      <EditProductButton itemId={itemId} />
      <DeleteProductButton
        deleteItem={() => deleteItem(itemId)}
        itemId={itemId}
      />
    </div>
  );
};
