import React, { FC } from "react";
import { makeStyles, TextField } from "@material-ui/core";
import { FieldProps } from "formik";

interface AuthInputProps {
  placeholder?: string;
  type?: string;
}

export const useAuthInputStyles = makeStyles(() => ({
  authInput: {
    height: "40px",
    width: "324px",
    "& .MuiOutlinedInput-root": {
      "&:hover fieldset": {
        borderColor: "#817185",
        borderWidth: "0.5px"
      },
      "&.Mui-focused fieldset": {
        borderColor: "#008dc8",
        borderWidth: "2px"
      }
    }
  }
}));

export const AuthInput: FC<FieldProps & AuthInputProps> = ({
  field,
  form,
  placeholder,
  type
}) => {
  const classes = useAuthInputStyles();
  return (
    <TextField
      className={classes.authInput}
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
