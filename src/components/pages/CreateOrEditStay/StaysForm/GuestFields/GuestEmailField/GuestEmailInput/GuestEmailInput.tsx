import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import React, { FC } from "react";
import { useTextFieldInputStyle } from "../../../../../../../styles/muiStyles";
import { withMemo } from "../../../../../../../utils/withMemo";

export const GuestEmailInputInt: FC<FieldProps> = ({ field, form }) => {
  const classes = useTextFieldInputStyle();
  return (
    <TextField
      className={classes.textFieldInputStyle}
      value={field.value}
      onChange={event => {
        form.setFieldValue(field.name, event.target.value);
      }}
    />
  );
};

export const GuestEmailInput = withMemo(
  GuestEmailInputInt
) as typeof GuestEmailInputInt;
