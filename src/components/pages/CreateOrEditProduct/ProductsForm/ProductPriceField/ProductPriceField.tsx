import { Field } from "formik";
import React from "react";
import "./ProductPriceField.scss";
import { ProductPriceInput } from "./ProductPriceInput/ProductPriceInput";

export const ProductPriceField = () => {
  return (
    <div className="productPriceField">
      <label className="productFormLabel" htmlFor="productPrice">
        Precio
      </label>
      <Field id="productPrice" name="price" component={ProductPriceInput} />
    </div>
  );
};
