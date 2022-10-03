import React, { useContext } from "react";
import { FieldProps } from "formik";
import { DateTime } from "luxon";
import { MaterialUiPickersDate } from "material-ui-pickers";
import { StaysContext } from "../../../../../../context/StaysContext";
import { withMemo } from "../../../../../../../utils/withMemo";
import { DateInput } from "../../../../../../common/DateInput/DateInput";

export const StartDateInputInt: React.FC<FieldProps> = ({ field, form }) => {
  const { setCurrentStay } = useContext(StaysContext);
  return (
    <DateInput
      onChange={(date: MaterialUiPickersDate) => {
        form.setFieldValue(field.name, date);
        setCurrentStay(currentStay => ({
          ...currentStay,
          start_date: date ? DateTime.fromISO(date).toFormat("dd/MM/yyyy") : ""
        }));
      }}
      value={field.value}
    />
  );
};

export const StartDateInput = withMemo(
  StartDateInputInt
) as typeof StartDateInputInt;
