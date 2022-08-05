import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import React, { FC } from "react";

export const ProductPriceInput: FC<FieldProps> = ({ field, form }) => {
  return (
    <TextField
      type="number"
      inputProps={{ min: 0, step: 0.1 }}
      value={field.value}
      onChange={event => {
        form.setFieldValue(field.name, event.target.value.replace(/^0+/, ""));
      }}
      required
    />
  );
};
