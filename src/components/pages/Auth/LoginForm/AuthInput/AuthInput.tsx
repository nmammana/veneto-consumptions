import React, { FC } from "react";
import { TextField } from "@material-ui/core";
import { FieldProps } from "formik";
import "./AuthInput.scss";

interface AuthInputProps {
  placeholder?: string;
  type?: string;
}

export const AuthInput: FC<FieldProps & AuthInputProps> = ({
  field,
  form,
  placeholder,
  type
}) => {
  return (
    <TextField
      type={type}
      value={field.value}
      onChange={event => {
        form.setFieldValue(field.name, event.target.value);
      }}
      placeholder={placeholder}
      variant="outlined"
      required
    />
  );
};
