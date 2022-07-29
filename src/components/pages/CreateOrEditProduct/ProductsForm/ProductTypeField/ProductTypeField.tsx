import { Field } from "formik";
import React from "react";
import "./ProductTypeField.scss";
import { ProductTypeInput } from "./ProductTypeInput/ProductTypeInput";

export const ProductTypeField = () => {
  return (
    <div className="productTypeField">
      <label className="productFormLabel" htmlFor="productType">
        Categoría
      </label>
      <Field
        id="productType"
        name="type_of_benefit"
        component={ProductTypeInput}
      />
    </div>
  );
};
