import { Field } from "formik";
import React, { FC } from "react";
import { ProductNameInput } from "./ProductNameInput/ProductNameInput";
import "./ProductNameField.scss";

interface ProductNameFieldProps {
  className?: string;
}

export const ProductNameField: FC<ProductNameFieldProps> = ({ className }) => {
  return (
    <div className={`productNameField ${className}`}>
      <label className="productsSearchBarLabel" htmlFor="productName">
        Producto
      </label>
      <Field id="productName" name="productName" component={ProductNameInput} />
    </div>
  );
};
