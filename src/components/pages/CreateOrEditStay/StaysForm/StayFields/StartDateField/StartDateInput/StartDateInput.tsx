import React from "react";
import { FieldProps } from "formik";
import { DatePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import { MaterialUiPickersDate } from "material-ui-pickers";

export const StartDateInput: React.FC<FieldProps> = ({ field, form }) => {
  return (
    <DatePicker
      value={field.value}
      onChange={(date: MaterialUiPickersDate) =>
        form.setFieldValue(field.name, date)
      }
      inputFormat="dd/MM/yyyy"
      renderInput={params => <TextField {...params} variant="standard" />}
    />
  );
};
