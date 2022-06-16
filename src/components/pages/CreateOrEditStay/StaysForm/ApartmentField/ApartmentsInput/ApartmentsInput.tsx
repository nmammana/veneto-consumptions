import React, { FC } from "react";
import { Autocomplete } from "@mui/material";
import { TextField, TextFieldProps } from "@material-ui/core";
import { FieldProps } from "formik";
import { apartments } from "../../../apartments";

export const ApartmentsInput: FC<FieldProps & TextFieldProps> = props => {
  const {
    form: { touched, setTouched, setFieldValue }
  } = props;
  const { error, helperText } = props;
  const {
    field: { name }
  } = props;

  return (
    <Autocomplete
      onChange={(_, value) => {
        setFieldValue(name, value?.value);
      }}
      options={apartments}
      onBlur={() => setTouched({ ...touched, [name!]: true })}
      renderInput={textFieldProps => (
        <TextField
          {...props}
          {...textFieldProps}
          helperText={helperText}
          error={error}
        />
      )}
    />
  );
};
