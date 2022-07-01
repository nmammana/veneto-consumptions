import React from "react";
import { DeleteProductButton } from "./DeleteProductButton/DeleteProductButton";
import { EditProductButton } from "./EditProductButton/EditProductButton";
import { ProductDetailPopup } from "./ProductDetailPopup/ProductDetailPopup";
import "./TableRowActionButtons.scss";

export const TableRowActionButtons = () => {
  return (
    <div className="actionItems">
      <ProductDetailPopup />
      <EditProductButton />
      <DeleteProductButton />
    </div>
  );
};
