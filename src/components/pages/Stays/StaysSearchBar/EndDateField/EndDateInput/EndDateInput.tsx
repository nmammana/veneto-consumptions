import React from "react";
import { FieldProps } from "formik";
import { MaterialUiPickersDate } from "material-ui-pickers";
import { DateInput } from "../../../../../common/DateInput/DateInput";

export const EndDateInput: React.FC<FieldProps> = ({ field, form }) => {
  return (
    <DateInput
      onChange={(date: MaterialUiPickersDate) => {
        form.setFieldValue(field.name, date);
      }}
      value={field.value}
      clearable
    />
  );
};
