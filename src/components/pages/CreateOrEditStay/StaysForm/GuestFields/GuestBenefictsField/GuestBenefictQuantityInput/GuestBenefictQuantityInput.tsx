import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import React, { FC } from "react";

export const GuestBenefictQuantityInput: FC<FieldProps> = ({ field, form }) => {
  return (
    <TextField
      type="number"
      value={field.value}
      onChange={event => {
        form.setFieldValue(field.name, event.target.value);
      }}
      required
    />
  );
};
