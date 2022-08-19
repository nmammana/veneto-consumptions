import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import React, { FC } from "react";
import { useTextFieldInputStyle } from "../../../../../../../../styles/muiStyles";

export const GuestBenefictQuantityInput: FC<FieldProps> = ({ field, form }) => {
  const classes = useTextFieldInputStyle();
  return (
    <TextField
      className={classes.textFieldInputStyle}
      type="number"
      inputProps={{ min: 0, max: 500 }}
      value={field.value}
      onChange={event => {
        form.setFieldValue(field.name, event.target.value);
      }}
    />
  );
};
