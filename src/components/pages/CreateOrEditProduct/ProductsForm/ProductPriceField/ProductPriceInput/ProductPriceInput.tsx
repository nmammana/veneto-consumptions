import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import React, { FC } from "react";
import { useTextFieldInputStyle } from "../../../../../../styles/muiStyles";

export const ProductPriceInput: FC<FieldProps> = ({ field, form }) => {
  const classes = useTextFieldInputStyle();
  return (
    <TextField
      className={classes.textFieldInputStyle}
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
