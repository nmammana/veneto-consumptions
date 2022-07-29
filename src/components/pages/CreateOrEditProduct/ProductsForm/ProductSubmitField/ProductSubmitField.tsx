import { Field } from "formik";
import React from "react";
import { CreateProductButton } from "./CreateProductButton/CreateProductButton";
import "./ProductSubmitField.scss";

export const ProductSubmitField = () => {
  return <Field id="submit" name="submit" component={CreateProductButton} />;
};
