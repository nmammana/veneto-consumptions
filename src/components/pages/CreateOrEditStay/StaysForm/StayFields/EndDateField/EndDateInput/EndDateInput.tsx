import React, { useContext } from "react";
import { FieldProps } from "formik";
import { DateTime } from "luxon";
import { DatePicker } from "@mui/x-date-pickers";
import TextField from "@mui/material/TextField";
import { MaterialUiPickersDate } from "material-ui-pickers";
import { StaysContext } from "../../../../../../context/StaysContext";

export const EndDateInput: React.FC<FieldProps> = ({ field, form }) => {
  const { setCurrentStay } = useContext(StaysContext);
  return (
    <DatePicker
      value={field.value}
      onChange={(date: MaterialUiPickersDate) => {
        form.setFieldValue(field.name, date);
        setCurrentStay(currentStay => ({
          ...currentStay,
          end_date: date ? DateTime.fromISO(date).toFormat("dd/MM/yyyy") : ""
        }));
      }}
      inputFormat="dd/MM/yyyy"
      renderInput={params => <TextField {...params} variant="standard" />}
    />
  );
};
