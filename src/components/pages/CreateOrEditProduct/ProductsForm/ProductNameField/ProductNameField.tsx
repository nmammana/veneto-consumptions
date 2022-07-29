import { Field } from "formik";
import React from "react";
import "./ProductNameField.scss";
import { ProductNameInput } from "./ProductNameInput/ProductNameInput";

export const ProductNameField = () => {
  return (
    <div className="productNameField">
      <label className="productFormLabel" htmlFor="productName">
        Nombre del producto
      </label>
      <Field id="productName" name="name" component={ProductNameInput} />
    </div>
  );
};
